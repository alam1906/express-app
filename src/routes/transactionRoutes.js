import express from "express";
import { createTransactionController } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/create", createTransactionController);

export default router;
