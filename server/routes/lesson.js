import express from "express";
import { addLesson, getLessons } from "../controllers/lesson.js";

const router = express.Router();

router.get("/", getLessons);
router.post("/", addLesson);

export default router;
