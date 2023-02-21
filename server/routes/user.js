import express from "express";
import { getAdmin, getStudent, getTeacher } from "../controllers/user.js";

const router = express.Router();

router.get("/students", getStudent);
router.post("/teachers", getTeacher);
router.delete("/admins", getAdmin);

export default router;
