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

export const getExamSearch = async (req, res) => {
  console.log(req.query);
  const results = {};

  const query = gql`
    query MyQuery($id: String!, $name: String!) {
      examSearch: examsConnection(where: { slug_contains: $id }) {
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
      studentSearch: studentsConnection(where: { name_contains: $name }) {
        edges {
          node {
            exams {
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
    }
  `;
  try {
    const result = await request(graphqlAPI, query, req.query);

    results.examSearch = result.examSearch.edges;
    results.studentSearch = result.studentSearch.edges;

    console.log(results);
    res.status(200).json(results);
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

export const getStudentExams = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        student(where: { slug: $slug }) {
          exams {
            examDate
            id
            name
            results
            slug
            term
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
  const publish = gql`
    mutation MyMutation($id: ID) {
      publishExam(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json({ message: "success" });

    const published = await graphQLClient.request(publish, {
      id: result.createExam.id,
    });
    console.log("published", published);
    
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};
