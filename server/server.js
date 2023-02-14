import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import studentRoutes from './routes/students.js'

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/students', studentRoutes)

app.listen(port, () => console.log(`🚀 Running on port ${port}`));

app.get("/", async function (_, res) {

  // const {products} =  getStudents;

  res.send( "hello" );
});