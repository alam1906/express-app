import express from "express";
import {
  createTransactionController,
  getMidtransCallbackController,
  getStatusTransactionController,
} from "../controllers/transaction_controller.js";

const router = express.Router();

router.post("/", createTransactionController);
router.get("/:order_id", getStatusTransactionController);
router.post("/midtrans-callback", getMidtransCallbackController);

export default router;
