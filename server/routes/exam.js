import express from "express";
import { addExams, getExams } from "../controllers/exam.js";

const router = express.Router();

router.get("/", getExams);
router.post("/", addExams);

export default router;
