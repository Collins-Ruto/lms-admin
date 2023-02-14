import express from "express";
import { getSubjects } from "../controllers/subjects.js";

const router = express.Router();

router.get("/", getSubjects);

export default router;
