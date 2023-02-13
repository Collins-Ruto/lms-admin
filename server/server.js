import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {request, gql} from "graphql-request"

dotenv.config();
const app = express();

const port = process.env.PORT || 8000;

const graphqlAPI =
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cle2syke34vja01um747d0nxv/master";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(port, () => console.log(`🚀 Running on port ${port}`));

app.get("/", async function (_, res) {
  const query = gql`
    query MyQuery {
      students {
        name
        phone
        email
      }
    }
  `;

  const products = await request(graphqlAPI, query);

  res.send({ products });
});