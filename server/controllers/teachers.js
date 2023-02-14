import { request, gql } from "graphql-request";
import graphqlAPI from "../config.js";

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
              userName
              teacherId
              streams {
                name
                classId
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
