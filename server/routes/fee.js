import express from "express";
import { addFee, getFees } from "../controllers/fee.js";

const router = express.Router();

router.get("/", getFees);
router.post("/", addFee);

export default router;
