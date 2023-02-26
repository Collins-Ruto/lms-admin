import express from "express";
import { addExams, getExams, getExamSearch, getStudent, getStudentExams } from "../controllers/exam.js";

const router = express.Router();

router.post("/", addExams);
router.get("/", getExams);
router.get("/search", getExamSearch);
router.get("/student", getStudent);
router.get("/studentexams", getStudentExams);

export default router;
