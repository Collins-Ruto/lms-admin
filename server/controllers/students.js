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
              gender
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
  console.log(req.body)
  const query = gql`
    mutation CreateStudent(
      $name: String!
      $email: String!
      $gender: String
      $parent: String
      $phone: Int
      $dob: String
      $admid: String
      $slug: String!
      $stream_slug: String!
    ) {
      createStudent(
        data: {
          name: $name
          email: $email
          gender: $gender
          parent: $parent
          phone: $phone
          password: $slug
          dateOfBirth: $dob
          admissionId: $admid
          slug: $slug
          stream: { connect: { Stream: { slug: $stream_slug } } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStudent = async (req, res) => {
   console.log(req.body);
   const query = gql`
     mutation MyMutation(
      $slug: String!
      ){
       deleteStudent(where: { slug: $slug }) {
        id
        name
       }
     }
   `;
   try {
     const result = await graphQLClient.request(query, req.body);

     res.status(200).json(result);
   } catch (error) {
     console.log(error.message);
   }
 }
