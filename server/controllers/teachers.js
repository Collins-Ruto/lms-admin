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

    res.status(200).json(result.teachersConnection.edges);
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



export const editTeacher = async (req, res) => {
  console.log(req.body);

  const query = `
  mutation updateModel($slug: String!, $data: TeacherUpdateInput!) {
    updateTeacher(where: {slug: $slug}, data: $data) {
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
    res.json(false)
  }
};

export const getTeacher = async ( slug, oldPassword ) => {
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        teacher(where: { slug: $slug }) {
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug: slug });
    const validPass =
      result.teacher &&
      (await bcrypt.compare(oldPassword, result.teacher.password));

    return validPass ? true : false;
  } catch (error) {
    console.log(error.message);
  }
};

export const editPassword = async (req, res) => {
  const validPassword = await getTeacher(req.body.slug, req.body.data.oldPassword);
  delete req.body.data.oldPassword;
  
  const query = `
  mutation updateModel($slug: String!, $data: TeacherUpdateInput!) {
    updateTeacher(where: {slug: $slug}, data: $data) {
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
      res.json({message: "Invalid Password"})
    }
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
