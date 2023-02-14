import express from "express";
import { getClasses } from "../controllers/class.js";

const router = express.Router();

router.get("/", getClasses);

export default router;
