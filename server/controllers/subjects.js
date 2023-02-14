import { request, gql } from "graphql-request";
import {graphqlAPI} from "../config.js";

export const getSubjects = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        subjectsConnection {
          edges {
            node {
              name
              slug
              teacher {
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

    res.status(200).json(result.subjectsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};
