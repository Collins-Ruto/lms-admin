import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import auth from "./middleware/auth.js";
import { adminRoutes, dataRoutes, examRoutes, feeRoutes, infoRoutes, lessonRoutes, studentsRoutes, teachersRoutes, userRoutes } from "./routes/index.js";

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Origin", "https://lms-adm.netlify.app");
  // res.setHeader("Access-Control-Allow-Origin", "https://lms-adm.netlify.app/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-Token");
  next();
})

app.use('/user', userRoutes)
app.use('/lessons', lessonRoutes)
app.use('/data', dataRoutes)
app.use(auth)
app.use("/infos", infoRoutes);
app.use('/students', studentsRoutes)
app.use('/exams', examRoutes)
app.use('/fees', feeRoutes)
app.use('/teachers', teachersRoutes)
app.use("/admins", adminRoutes);

app.listen(port, () => console.log(`🚀 Running on port ${port}`));

app.get("/", async function (_, res) {
  res.send( "hello" );
});
