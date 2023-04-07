import express from "express";
import { addAsset, addStream, addSubject, addTask, getSubjects } from "../controllers/infos.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/", getSubjects);
router.post("/streams", addStream);
router.post("/subjects", addSubject);
router.post("/addtask", addTask);
router.post("/addasset", upload.single('file'), addAsset);

export default router;
