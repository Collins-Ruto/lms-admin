import express from "express";
import { addExams, getExams, getStudent } from "../controllers/exam.js";

const router = express.Router();

router.post("/", addExams);
router.get("/", getExams);
router.get("/student", getStudent);

export default router;
