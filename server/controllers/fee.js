import { GraphQLClient, request, gql } from "graphql-request";
import { graphqlAPI, GRAPHCMS_TOKEN } from "../config.js";

const graphQLClient = new GraphQLClient(graphqlAPI, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

const publish = gql`
  mutation MyMutation($id: ID) {
    publishFee(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

export const getFees = async (req, res) => {
  try {
    const query = gql`
      query MyQuery {
        feesConnection(orderBy: publishedAt_DESC) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              name
              type
              slug
              term
              payday
              amount
              student {
                ... on Student {
                  name
                  slug
                  fees {
                    type
                    amount
                  }
                  stream {
                    ... on Stream {
                      id
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);
    console.log(result);

    const students = result.feesConnection.edges;
    result.feesConnection.edges = students.map((student) => {
      const fees = student.node.student.fees;
      let invoice = 0;
      let credit = 0;

      fees.forEach((fee) => {
        fee.type === "invoice"
          ? (invoice += parseFloat(fee.amount))
          : (credit += parseFloat(fee.amount));
      });
      (invoice - credit).toString();

      return { ...student, balance: (invoice - credit).toString() };
    });

    res.status(200).json(result.feesConnection);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeesPage = async (req, res) => {
  console.log(req.body);
  const direction = req.body.direction;
  try {
    const query = gql`
      query MyQuery( $cursor: String) {
        feesConnection( orderBy: publishedAt_DESC, ${direction}: $cursor) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              name
              type
              slug
              term
              payday
              amount
              student {
                ... on Student {
                  name
                  slug
                  balance
                  stream {
                    ... on Stream {
                      id
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.body);

    res.status(200).json(result.feesConnection);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeeSearch = async (req, res) => {
  console.log(req.query);
  req.query.name = req.query.name === "" ? undefined : req.query.name;
  req.query.id = req.query.id === "" ? undefined : req.query.id;
  const results = {};

  const query = gql`
    query MyQuery($id: String, $name: String) {
      feeSearch: feesConnection(where: { slug_contains: $id }) {
        edges {
          node {
            name
            type
            slug
            term
            payday
            amount
            student {
              ... on Student {
                name
                slug
                balance
                stream {
                  ... on Stream {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      }
      studentSearch: studentsConnection(where: { name_contains: $name }) {
        edges {
          node {
            fees {
              name
              type
              slug
              term
              payday
              amount
              student {
                ... on Student {
                  name
                  slug
                  balance
                  stream {
                    ... on Stream {
                      id
                      name
                      slug
                    }
                  }
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

    results.feeSearch = result.feeSearch.edges;
    results.studentSearch = result.studentSearch.edges;

    console.log(results);
    res.status(200).json(results);
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
      $stdt_slug: String!
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

    res.status(200).json({ message: "success" });

    const published = await graphQLClient.request(publish, {
      id: result.createFee.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.response.errors[0].message });
  }
};

export const getStudentFees = async (req, res) => {
  console.log(req.query);
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        studentsConnection(
          where: { slug: $slug }
          orderBy: publishedAt_DESC
          first: 20
        ) {
          edges {
            node {
              fees {
                amount
                payday
                type
                term
                slug
              }
              balance
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, req.query);
    console.log(result);

    const fees = result.studentsConnection.edges[0].node.fees;
    let invoice = 0;
    let credit = 0;

    fees.forEach((fee) => {
      fee.type === "invoice"
        ? (invoice += parseFloat(fee.amount))
        : (credit += parseFloat(fee.amount));
    });
    result.studentsConnection.edges[0].node.balance = (
      invoice - credit
    ).toString();

    return res.status(200).json(result.studentsConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};

export const StudentFees = async (slug) => {
  console.log(slug);
  try {
    const query = gql`
      query MyQuery($slug: String!) {
        feesConnection(where: { slug: $slug }) {
          edges {
            node {
              fees {
                amount
                payday
                type
                term
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug: slug });
    console.log(result);

    return result.feesConnection.edges;
  } catch (error) {
    console.log(error.message);
  }
};
