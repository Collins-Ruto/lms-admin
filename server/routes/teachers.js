import express from "express";
import { getTeachers } from "../controllers/teachers.js";

const router = express.Router();

router.get("/", getTeachers);

export default router;
