import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getTeachers = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        teachersConnection {
          edges {
            node {
              name
              phone
              password
              slug
              streams {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    res.status(200).json(result.teachersConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};

export const addTeacher = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation CreateTeacher(
      $name: String!
      $email: String!
      $gender: String
      $jod: String
      $phone: Int
      $dob: String
      $slug: String!
      $password: String
      $quali: String
    ) {
      createTeacher(
        data: {
          name: $name
          email: $email
          gender: $gender
          joiningDate: $jod
          phone: $phone
          password: $password
          qualification: $quali
          dateOfBirth: $dob
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
