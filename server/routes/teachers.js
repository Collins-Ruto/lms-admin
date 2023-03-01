import express from "express";
import { addTeacher, deleteTeacher, editPassword, editTeacher, getSearch, getTeachers, getTeachersPage } from "../controllers/teachers.js";

const router = express.Router();

router.get("/", getTeachers);
router.get("/teacher", getSearch);
router.post("/page", getTeachersPage);
router.post("/", addTeacher);
router.post("/edit", editTeacher);
router.post("/password", editPassword);
router.delete("/", deleteTeacher);

export default router;