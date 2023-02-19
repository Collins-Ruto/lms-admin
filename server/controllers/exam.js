import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getExams = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        examsConnection {
          edges {
            node {
              examDate
              id
              name
              results
              slug
              term
              student {
                ... on Student {
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

export const getStudent = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($admissionId: String!) {
        student(where: { admissionId: $admissionId }) {
          name
          slug
          stream {
            ... on Stream {
              name
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.query);

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};




export const addExams = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation CreateExam($data: ExamCreateInput!) {
      createExam(data: $data) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
