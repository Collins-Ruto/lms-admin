import express from "express";
import { addStudent, getStudents } from "../controllers/students.js";

const router = express.Router();

router.get('/', getStudents);
router.post('/', addStudent )

export default router