import { request, gql } from "graphql-request";
import {graphqlAPI} from "../config.js";

export const getFees = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        feesConnection {
          edges {
            node {
              invoice
              slug
              credited
              creditDate
              student {
                ... on Student {
                  name
                  slug
                  stream
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    res.status(200).json(result.feesConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};
