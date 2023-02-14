import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { classRoutes, examRoutes, feeRoutes, studentsRoutes, subjectRoutes, teachersRoutes } from "./routes/index.js";

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/students', studentsRoutes)
app.use('/class', classRoutes)
app.use('/exams', examRoutes)
app.use('/fees', feeRoutes)
app.use('/subjects', subjectRoutes)
app.use('/teachers', teachersRoutes)

app.listen(port, () => console.log(`🚀 Running on port ${port}`));

app.get("/", async function (_, res) {

  // const {products} =  getStudents;

  res.send( "hello" );
});