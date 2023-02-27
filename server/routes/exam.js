import express from "express";
import { addExams, getExams, getStudent, getStudentExams } from "../controllers/exam.js";

const router = express.Router();

router.post("/", addExams);
router.get("/", getExams);
router.get("/student", getStudent);
router.get("/studentexams", getStudentExams);

export default router;
