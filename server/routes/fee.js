import express from "express";
import { addFee, getFees, getFeeSearch, getStudentFees } from "../controllers/fee.js";

const router = express.Router();

router.get("/", getFees);
router.get("/search", getFeeSearch);
router.get("/student", getStudentFees);
router.post("/", addFee);

export default router;
