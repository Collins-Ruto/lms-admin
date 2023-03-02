import express from "express";
import { addStream, addSubject, getSubjects } from "../controllers/infos.js";

const router = express.Router();

router.get("/", getSubjects);
router.post("/streams", addStream);
router.post("/subjects", addSubject);

export default router;
