import { request, gql } from "graphql-request";
import { graphqlAPI } from "../config.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { TOKEN_KEY } from "../config.js";

export const getStudent = async (req, res) => {
  console.log(req.body);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        student(where: { slug: $userName }) {
          name
          slug
          phone
          email
          password
          stream {
            ... on Stream {
              name
              slug
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.body);

    const validPass =
      result.student &&
      (await bcrypt.compare(req.body.password, result.student.password));
    result.student && delete result.student.password;

    console.log(validPass);

    const token = jwt.sign({ user_id: result.student.slug }, TOKEN_KEY, {
      expiresIn: "2h",
    });

    result.student.token = token;

    res.status(200).json(validPass ? result : false);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeacher = async (req, res) => {
  console.log(req.body);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        teacher(where: { slug: $userName }) {
          name
          slug
          phone
          email
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.body);
    console.log(result)
    const validPass = result.teacher && await bcrypt.compare(req.body.password, result.teacher.password)
    result.teacher && delete result.teacher.password;

    console.log(validPass)

    const token = jwt.sign(
      { user_id: result.teacher.slug },
      TOKEN_KEY
    );

    result.teacher.token = token
    
    res.status(200).json(validPass ? result : false);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAdmin = async (req, res) => {
  console.log(req.body);
  try {
    const query = gql`
      query MyQuery($userName: String!) {
        admin(where: { userName: $userName }) {
          name
          slug
          phone
          email
          password
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.body);
    const validPass =
      result.admin &&
      (await bcrypt.compare(req.body.password, result.admin.password));
    result.admin && delete result.admin.password;

    console.log(validPass);

    const token = jwt.sign({ user_id: result.admin.slug }, TOKEN_KEY, {
      expiresIn: "2h",
    });

    result.admin.token = token;

    res.status(200).json(validPass ? result : false);
  } catch (error) {
    console.log(error.message);
  }
};