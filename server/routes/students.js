import express from "express";
import { addStudent, deleteStudent, editPassword, editStudent, getStudents } from "../controllers/students.js";

const router = express.Router();

router.get('/', getStudents);
router.post('/', addStudent)
router.post("/edit", editStudent);
router.post("/password", editPassword);
router.delete('/', deleteStudent )

export default router