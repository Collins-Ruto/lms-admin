import express from "express";
import { addTeacher, deleteTeacher, editPassword, editTeacher, getTeachers } from "../controllers/teachers.js";

const router = express.Router();

router.get("/", getTeachers);
router.post("/edit", editTeacher);
router.post("/password", editPassword);
router.post("/", addTeacher);
router.delete("/", deleteTeacher);

export default router;