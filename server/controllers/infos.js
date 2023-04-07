import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";
import fs from "fs";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});
const graphQLClient2 = new GraphQLClient(
  `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle2syke34vja01um747d0nxv/master/upload`,
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  }
);

export const getSubjects = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        subjects(first: 20) {
          name
          slug
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const addStream = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation createStream($id: String!, $name: String) {
      createStream(data: { slug: $id, name: $name }) {
        id
      }
    }
  `;

  const publish = gql`
    mutation MyMutation($id: ID) {
      publishStream(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json({ message: "success" });

    const published = await graphQLClient.request(publish, {
      id: result.createStream.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};

export const addSubject = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation createSubject($id: String!, $name: String) {
      createSubject(data: { slug: $id, name: $name }) {
        id
      }
    }
  `;

  const publish = gql`
    mutation MyMutation($id: ID) {
      publishSubject(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json({ message: "success" });

    const published = await graphQLClient.request(publish, {
      id: result.createSubject.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};

export const addTask = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation CreateTask(
      $title: String!
      $streamId: String!
      $subjectId: String!
      $teacherId: String!
      $description: String!
      $fileId: ID
    ) {
      createTask(
        data: {
          name: $title
          description: $description
          stream: { connect: { Stream: { slug: $streamId } } }
          subject: { connect: { Subject: { slug: $subjectId } } }
          teacher: { connect: { Teacher: { slug: $teacherId } } }
          file: { connect: { id: $fileId } }
        }
      ) {
        id
      }
    }
  `;

  const publish = gql`
    mutation MyMutation($id: ID) {
      publishTask(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json({ message: "success" });

   const published = await graphQLClient.request(publish, {
     id: result.createTask.id,
   });
   console.log("published", published);

  } catch (error) {
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};

export const addAsset = async (req, res) => {
  const { path: filePath, originalname } = req.file;

  console.log(graphQLClient2);
  console.log(req.file);

  const assetQuery = gql`
    mutation CreateAsset($file: Upload!) {
      createAsset(data: { file: { create: { upload: $file } } }) {
        id
        url
      }
    }
  `;

  const publishAsset = gql`
    mutation MyMutation($id: ID) {
      publishAsset(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const stream = fs.createReadStream(req.file.path);

    const assetResult = await graphQLClient2.request(assetQuery, {
      file: stream,
    });

    const publishedAsset = await graphQLClient2.request(publishAsset, {
      id: assetResult.createAsset.id,
    });

    console.log("asset published", publishedAsset);

    // fs.unlinkSync(filePath);

    res.status(200).json(assetResult.createAsset.id);
  } catch (error) {
    // fs.unlinkSync(filePath);
    console.log(error.message);
    res.json({ message: error.message });
    // res.json({ message: error.response.errors[0].message });
  }
};

export const addTask2 = async (req, res) => {
  const { path: filePath, originalname } = req.file;

    const stream = fs.createReadStream(filePath);
    const assetQuery = gql`
      mutation ($file: Upload!, $fileName: String!) {
        createAsset(data: { file: $file, fileName: $fileName }) {
          id
        }
      }
    `;

    const result = await graphQLClient.request(query, {
      file: stream,
      fileName: originalname,
    });
  
}
