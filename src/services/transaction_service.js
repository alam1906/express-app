import Midtrans from "midtrans-client";
import dotenv from "dotenv";

dotenv.config();

const snap = new Midtrans.Snap({
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  isProduction: false,
});

const coreApi = new Midtrans.CoreApi({
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  isProduction: false,
});

// create transaction
const createTransactionService = async (order) => {
  const parameter = {
    transaction_details: {
      order_id: order.id,
      gross_amount: order.amount,
    },
  };

  const response = await snap.createTransaction(parameter);
  return response;
};

// get status
const getStatusTransactionService = async (order_id) => {
  return await snap.transaction.status(order_id);
};

export { createTransactionService };
export { getStatusTransactionService };
