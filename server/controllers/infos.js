import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";
import fs from "fs";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

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
  const { path: filePath, originalname } = req.file;

  console.log(req.body);
  console.log(req.file);

  const query = gql`
    mutation CreateTask(
      $name: String!, 
      $stid: String!, 
      $sid: String!, 
      $tid: String!, 
      $description: String!, 
      $file: Upload!) {
    createTask(data: {
      name: $name,
      description: $description,
      file: {
        create: {
          filename: $file.filename,
          handle: $file.createReadStream
        }
      }
      stream: {connect: {Stream: {slug: stid}}}
      subject: {connect: {Subject: {slug: sid}}}
      teacher: {connect: {Teacher: {slug: tid}}}
    }) {
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
    const stream = fs.createReadStream(filePath);
    const result = await graphQLClient.request(query, {
      name: req.body.title,
      sid: req.body.sid,
      stid: req.body.stid,
      tid: req.body.tid,
      description: req.body.description,
      file: stream,
      fileName: originalname,
    });

    fs.unlinkSync(filePath);

    res.status(200).json({ message: "success" });

    const published = await graphQLClient.request(publish, {
      id: result.createTask.id,
    });
    console.log("published", published);
  } catch (error) {
    // fs.unlinkSync(filePath);
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};

export const addTask2 = async (req, res) => {
  const { path: filePath, originalname } = req.file;

  try {
    const stream = fs.createReadStream(filePath);
    const { createAsset } = await graphQLClient.request(
      `
      mutation ($file: Upload!, $fileName: String!) {
        createAsset(data: { file: $file, fileName: $fileName }) {
          id
        }
      }
    `,
      {
        file: stream,
        fileName: originalname,
      }
    );

    fs.unlinkSync(filePath);

    res.status(200).json({ assetId: createAsset.id });
  } catch (error) {
    fs.unlinkSync(filePath);

    res.status(500).json({ message: error.message });
  }
};
