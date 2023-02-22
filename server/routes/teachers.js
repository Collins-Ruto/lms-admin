import express from "express";
import { addTeacher, deleteTeacher, getTeachers } from "../controllers/teachers.js";
import auth from '.././middleware/auth.js'

const router = express.Router();

router.get("/", getTeachers);
router.post("/", addTeacher);
router.delete("/", deleteTeacher);

export default router;