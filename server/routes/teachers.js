import express from "express";
import { addTeacher, deleteTeacher, editPassword, editTeacher, getTeachers } from "../controllers/teachers.js";

const router = express.Router();

router.get("/", getTeachers);
router.post("/", addTeacher);
router.post("/edit", editTeacher);
router.post("/password", editPassword);
router.delete("/", deleteTeacher);

export default router;