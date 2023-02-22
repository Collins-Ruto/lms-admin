import express from "express";
import { getAdmin, getStudent, getTeacher } from "../controllers/user.js";

const router = express.Router();

router.post("/student", getStudent);
router.post("/teacher", getTeacher);
router.post("/admin", getAdmin);

export default router;
