import { request, gql } from "graphql-request";
import graphqlAPI from "../config.js";

export const getClasses = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        classesConnection {
          edges {
            node {
              date
              slug
              time
              stream {
                ... on Stream {
                  name
                  slug
                }
              }
              teacher {
                ... on Teacher {
                  name
                  slug
                }
              }
              subject {
                ... on Subject {
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

    res.status(200).json(result.classesConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};
