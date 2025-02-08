import { createTransaction } from "../services/midtransService.js";

const createTransactionController = async (req, res) => {
  try {
    const { order_id, gross_amount, customer } = req.body;

    if (!order_id || !gross_amount || !customer) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const token = await createTransaction(order_id, gross_amount, customer);

    res.json({
      status: "200",
      token: "https://app.sandbox.midtrans.com/snap/v2/vtweb/" + token,
    });
  } catch (error) {
    console.error("Transaction Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createTransactionController };
