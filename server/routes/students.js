import express from "express";
import { addStudent, deleteStudent, getStudents } from "../controllers/students.js";

const router = express.Router();

router.get('/', getStudents);
router.post('/', addStudent )
router.delete('/', deleteStudent )

export default router