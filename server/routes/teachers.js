import express from "express";
import { addTeacher, getTeachers } from "../controllers/teachers.js";

const router = express.Router();

router.get("/", getTeachers);
router.post("/", addTeacher);

export default router;
