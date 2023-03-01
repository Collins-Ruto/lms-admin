import express from "express";
import { addStudent, deleteStudent, editPassword, editStudent, getSearchStudent, getStudents, getStudentsPage } from "../controllers/students.js";

const router = express.Router();

router.get('/', getStudents);
router.get('/search', getSearchStudent);
router.post('/page', getStudentsPage);
router.post('/', addStudent)
router.post("/edit", editStudent);
router.post("/password", editPassword);
router.delete('/', deleteStudent )

export default router