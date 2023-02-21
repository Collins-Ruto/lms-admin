import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getStudent = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        student(where: { slug: $userName }) {
          name
          slug
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.query);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
export const getTeacher = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        teacher(where: { slug: $userName }) {
          name
          slug
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.query);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
export const getAdmin = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        admin(where: { userName: $userName }) {
          name
          slug
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.query);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};