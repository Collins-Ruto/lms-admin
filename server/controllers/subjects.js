import { request, gql } from "graphql-request";
import { graphqlAPI } from "../config.js";

export const getSubjects = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        subjects {
          name
          slug
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
