import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getCounts = async (req, res) => {
  const results = {};
  const query = gql`
    query MyQuery($slug: String!) {
      subjectCount: subjectsConnection {
        aggregate {
          count
        }
      }
      studentsCount: studentsConnection {
        aggregate {
          count
        }
      }
      teachersCount: teachersConnection {
        aggregate {
          count
        }
      }
      lessonsToday: teacher(where: { slug: $slug }) {
        lessons {
          day
        }
      }
      streamLessonsToday: stream(where: { slug: $slug }) {
        lessons {
          day
        }
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, req.body);

    results.subjects = result.subjectCount.aggregate.count;
    results.students = result.studentsCount.aggregate.count;
    results.teachers = result.teachersCount.aggregate.count;
    results.lessonsToday = result.lessonsToday || result.streamLessonsToday;
    console.log(results);

    return res.status(200).json(results);
  } catch (error) {
    console.log(error.message);
  }
};
