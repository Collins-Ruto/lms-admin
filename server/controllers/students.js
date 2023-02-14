import { request, gql } from "graphql-request";
import graphqlAPI from "../config.js";

export const getStudents = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        studentsConnection {
          edges {
            node {
              address
              dateOfBirth
              name
              parent
              phone
              studentId
              stream {
                ... on Stream {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query)

    res.status(200).json(result.studentsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};
