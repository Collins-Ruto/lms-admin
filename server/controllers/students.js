import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";
import bcrypt from "bcryptjs";

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
  const encryptedPass = await bcrypt.hash(req.body.slug, 10);
  req.body.password = encryptedPass; 

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
      $password: String!
      $stream_slug: String!
    ) {
      createStudent(
        data: {
          name: $name
          email: $email
          gender: $gender
          parent: $parent
          phone: $phone
          password: $password
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

export const getStudent = async (slug, oldPassword) => {
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        student(where: { slug: $slug }) {
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug: slug });
    const validPass =
      result.student &&
      (await bcrypt.compare(oldPassword, result.student.password));

    return validPass ? true : false;
  } catch (error) {
    console.log(error.message);
  }
};

export const editStudent = async (req, res) => {
  console.log(req.body);

  const query = `
  mutation updateModel($slug: String!, $data: StudentUpdateInput!) {
    updateStudent(where: {slug: $slug}, data: $data) {
      email
      phone
    }
  }
`;
  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.json(false);
  }
};

export const editPassword = async (req, res) => {
  const validPassword = await getStudent(
    req.body.slug,
    req.body.data.oldPassword
  );
  delete req.body.data.oldPassword;

  const query = `
  mutation updateModel($slug: String!, $data: StudentUpdateInput!) {
    updateStudent(where: {slug: $slug}, data: $data) {
      password
    }
  }
  `;
  try {
    const encryptedPass = await bcrypt.hash(req.body.data.password, 10);
    req.body.data.password = encryptedPass;

    if (validPassword) {
      const result = await graphQLClient.request(query, req.body);
      console.log(result);
      res.status(200).json({ message: "success" });
    } else {
      res.json({ message: "Invalid Password" });
    }
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
