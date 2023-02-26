import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getLessons = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        lessonsConnection {
          edges {
            node {
              day
              endTime
              id
              startTime
              stream {
                ... on Stream {
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

    res.status(200).json(result.lessonsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};

export const addLesson = async (req, res) => {
  console.log(req.body);
  const query = gql`
    mutation createLesson(
      $day: String!
      $start: String!
      $end: String
      $sid: String
      $tid: String
      $stid: String!
      $attnd: String
    ) {
      createLesson(
        data: {
          day: $day
          startTime: $start
          endTime: $end
          attendance: $attnd
          stream: { connect: { Stream: { slug: $stid } } }
          subject: { connect: { Subject: { slug: $sid } } }
          teacher: { connect: { Teacher: { slug: $tid } } }
        }
      ) {
        id
      }
    }
  `;

  const publish = gql`
    mutation MyMutation($id: ID) {
      publishLesson(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);

    res.status(200).json(result);

    const published = await graphQLClient.request(publish, {
      id: result.createLesson.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
  }
};
