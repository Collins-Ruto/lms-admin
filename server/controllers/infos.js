import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

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
