import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export const getCounts = async (req, res) => {
    const results = {}
  const query = gql`
    query MyQuery {
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
    }
  `;
  try {
      const result = await request(graphqlAPI, query);
      
      results.subjects = result.subjectCount.aggregate.count;
      results.students = result.studentsCount.aggregate.count;
      results.teachers = result.teachersCount.aggregate.count;
      console.log(results);

    return res.status(200).json(results);
  } catch (error) {
    console.log(error.message);
  }
};
