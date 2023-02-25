import express from "express";
import {
  addAdmin,
  deleteAdmin,
  editPassword,
  editAdmin,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/", addAdmin);
router.post("/edit", editAdmin);
router.post("/password", editPassword);
router.delete("/", deleteAdmin);

export default router;
