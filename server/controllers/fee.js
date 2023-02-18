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

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStudentFees = async (slug) => {
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
  const studentData = await getStudentFees(feeData.stdt_slug);
  console.log("studentData", studentData);
  let invoice = 0;
  let credit = 0;

  studentData && studentData[0].node.fees.forEach((fee) => {
    fee.type === "invoice" ? (invoice += parseFloat(fee.amount)) : (credit += parseFloat(fee.amount));
  });

  feeData && feeData.type === "invoice"
    ? (invoice += parseFloat(feeData.amount))
    : (credit += parseFloat(feeData.amount));
  
  const balance = (invoice - credit).toString()

  console.log(invoice, "credit", credit, "balance", balance)
  const data = { balance: balance, slug: feeData.stdt_slug };
  
  updateStudentFee(data)
};

export const updateStudentFee = async (data) => {
  const query = gql`
    mutation MyMutation($slug: String!, $balance: String!) {
      updateStudent(data: { balance: $balance }, where: { slug: $slug })
      {
        balance
        slug
      }
    }
  `;
   try {
     const result = await graphQLClient.request(query, data)
       .then((data) => console.log(data));

     
   } catch (error) {
     console.log(error.message);
   }
}