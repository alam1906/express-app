import {
  createTransactionService,
  getStatusTransactionService,
} from "../services/transaction_service.js";

let client = new Set();

// create transaction
const createTransactionController = async (req, res) => {
  try {
    const {order_id, items} = req.body;
    const data = await createTransactionService(order_id, items);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get status transaction
const getStatusTransactionController = async (req, res) => {
  try {
    const { order_id } = req.params;
    if (!order_id) {
      console.log("Wajib di isi");
    }
    const status = await getStatusTransactionService(order_id);
    console.log(order_id);
    res.json({ success: true, status });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// midtrans callback
const getMidtransCallbackController = async (req, res) => {
  console.log("Midtrans Webhook:", req.body);
  const message = JSON.stringify(req.body);
  client.forEach((client) => client.send(message));
  res.status(200).send("OK");
};

export { createTransactionController };
export { getMidtransCallbackController };
export { getStatusTransactionController };
export { client };
