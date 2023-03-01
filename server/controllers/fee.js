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
        feesConnection {
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
      }
    `;

    const result = await request(graphqlAPI, query);

    res.status(200).json(result.feesConnection.edges);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeeSearch = async (req, res) => {
  console.log(req.query);
  const results = {};

  const query = gql`
    query MyQuery($id: String!, $name: String!) {
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
    computeFee(req.body);

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
        studentsConnection(where: { slug: $slug }) {
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
        studentsConnection(where: { slug: $slug }) {
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

    return result.studentsConnection.edges;
  } catch (error) {
    console.log(error.message);
  }
};

const computeFee = async (feeData) => {
  console.log("feeData", feeData);
  const studentData = await StudentFees(feeData.stdt_slug);
  console.log("studentData", studentData);
  let invoice = 0;
  let credit = 0;

  studentData &&
    studentData[0].node.fees.forEach((fee) => {
      fee.type === "invoice"
        ? (invoice += parseFloat(fee.amount))
        : (credit += parseFloat(fee.amount));
    });

  feeData && feeData.type === "invoice"
    ? (invoice += parseFloat(feeData.amount))
    : (credit += parseFloat(feeData.amount));

  const balance = (invoice - credit).toString();

  console.log(invoice, "credit", credit, "balance", balance);
  const data = { balance: balance, slug: feeData.stdt_slug };

  updateStudentFee(data);
};

export const updateStudentFee = async (data) => {
  const query = gql`
    mutation MyMutation($slug: String!, $balance: String!) {
      updateStudent(data: { balance: $balance }, where: { slug: $slug }) {
        balance
        slug
        id
      }
    }
  `;

  try {
    const result = await graphQLClient
      .request(query, data)
      .then((data) => console.log(data));
    
    const published = await graphQLClient.request(publish, {
      id: result.updateStudent.id,
    });
    console.log("published", published);
  } catch (error) {
    console.log(error.message);
  }
};
