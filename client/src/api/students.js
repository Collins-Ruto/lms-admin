import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle2syke34vja01um747d0nxv/master";
// const graphqlAPI = process.env.GRAPHCMS_API;

export const getStudents = async () => {
  const query = gql`
    query MyQuery {
      studentsConnection {
        edges {
          node {
            address
            dateOfBirth
            name
            parent
            phone
            studentId
            stream {
              ... on Stream {
                id
                name
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.studentsConnection.edges;
};
