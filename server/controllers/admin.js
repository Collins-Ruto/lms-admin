import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";
import bcrypt from "bcryptjs";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

const publish = gql`
  mutation MyMutation($id: ID) {
    publishAdmin(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

export const addAdmin = async (req, res) => {
  const encryptedPass = await bcrypt.hash(req.body.password, 10);
  req.body.password = encryptedPass;

  console.log(req.body);
  const query = gql`
    mutation CreateAdmin(
      $name: String!
      $email: String!
      $phone: Int
      $slug: String!
      $password: String
    ) {
      createAdmin(
        data: {
          name: $name
          email: $email
          phone: $phone
          slug: $slug
          password: $password
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json(result);

    const published = await graphQLClient.request(publish, {
      id: result.createAdmin.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
  }
};

export const editAdmin = async (req, res) => {
  console.log(req.body);

  const query = `
  mutation updateModel($slug: String!, $data: AdminUpdateInput!) {
    updateAdmin(where: {slug: $slug}, data: $data) {
      email
      phone
      id
    }
  }
`;
  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json(result);

    const published = await graphQLClient.request(publish, {
      id: result.updateAdmin.id,
    });
    console.log("published", published);

  } catch (error) {
    console.log(error.message);
    res.json(false);
  }
};

export const getAdmin = async (slug, oldPassword) => {
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        admin(where: { slug: $slug }) {
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug: slug });
    const validPass =
      result.admin &&
      (await bcrypt.compare(oldPassword, result.admin.password));

    return validPass ? true : false;
  } catch (error) {
    console.log(error.message);
  }
};

export const editPassword = async (req, res) => {
  const validPassword = await getAdmin(
    req.body.slug,
    req.body.data.oldPassword
  );
  delete req.body.data.oldPassword;

  const query = `
  mutation updateModel($slug: String!, $data: AdminUpdateInput!) {
    updateAdmin(where: {slug: $slug}, data: $data) {
      password
      id
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

    res.status(200).json(result);

    const published = await graphQLClient.request(publish, {
      id: result.updateAdmin.id,
    });
     console.log("published", published);

  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAdmin = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation MyMutation($slug: String!) {
      deleteAdmin(where: { slug: $slug }) {
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
