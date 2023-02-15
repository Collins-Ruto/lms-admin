import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getStudents = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        studentsConnection {
          edges {
            node {
              dateOfBirth
              name
              parent
              phone
              slug
              stream {
                ... on Stream {
                  slug
                  name
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    res.status(200).json(result.studentsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};

export const addStudent = async (req, res) => {
  const query = gql`
    mutation CreateStudent(
      $name: String!
      $email: String!
      $gender: String
      $parent: String
      $phone: Int
      $password: String
      $dateOfBirth: String
      $slug: String!
    ) {
      createStudent(
        data: {
          name: $name
          email: $email
          gender: $gender
          parent: $parent
          phone: $phone
          password: $password
          dateOfBirth: $dateOfBirth
          slug: $slug
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
