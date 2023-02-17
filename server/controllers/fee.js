import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getFees = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        feesConnection {
          edges {
            node {
              type
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

export const addFee = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation CreateFee(
      $name: String!
      $term: String!
      $pday: String
      $type: String
      $slug: String!
      $amount: String
      $stdt_slug: String
    ) {
      createFee(
        data: {
          name: $name
          term: $term
          amount: $amount
          payday: $pday
          type: $type
          slug: $slug
          student: { connect: { Student: { slug: $stdt_slug } } }
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
