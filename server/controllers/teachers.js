import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";
import bcrypt from "bcryptjs";

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
              email
              phone
              password
              slug
              dateOfBirth
              joiningDate
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

    res.status(200).json({message: "success", result: result.teachersConnection.edges});
  } catch (error) {
    console.log(error.message);
  }
};

export const addTeacher = async (req, res) => {
  const encryptedPass = await bcrypt.hash(req.body.password, 10);
  req.body.password = encryptedPass;  

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

export const deleteTeacher = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation MyMutation($slug: String!) {
      deleteTeacher(where: { slug: $slug }) {
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
};
