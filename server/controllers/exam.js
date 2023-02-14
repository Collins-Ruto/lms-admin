import { request, gql } from "graphql-request";
import graphqlAPI from "../config.js";

export const getExams = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        examsConnection {
          edges {
            node {
              name
              marks
              examDate
              term
              slug
              subjects {
                ... on Subject {
                  name
                  slug
                }
              }
              students {
                ... on Student {
                  name
                  slug
                }
              }
              teachers {
                ... on Teacher {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    res.status(200).json(result.examsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};
