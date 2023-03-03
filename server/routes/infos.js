import express from "express";
import { addStream, addSubject, addTask, getSubjects } from "../controllers/infos.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/", getSubjects);
router.post("/streams", addStream);
router.post("/subjects", addSubject);
router.post("/addtask", upload.single('file'), addTask);

export default router;
