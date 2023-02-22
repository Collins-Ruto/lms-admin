import express from "express";
import { getAdmin, getStudent, getTeacher } from "../controllers/user.js";

const router = express.Router();

router.get("/student", getStudent);
router.post("/teacher", getTeacher);
router.delete("/admin", getAdmin);

export default router;
