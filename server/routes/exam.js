import express from "express";
import { getExams } from "../controllers/exam.js";

const router = express.Router();

router.get("/", getExams);

export default router;
