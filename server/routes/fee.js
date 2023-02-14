import express from "express";
import { getFees } from "../controllers/fee.js";

const router = express.Router();

router.get("/", getFees);

export default router;
