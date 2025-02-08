import midtransClient from "midtrans-client";
import dotenv from "dotenv";

dotenv.config();

const snap = new midtransClient.Snap({
  isProduction: false, // Ubah ke true jika di production
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

const createTransaction = async (orderId, amount, customer) => {
  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: amount,
    },
    customer_details: customer,
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return transaction.token;
  } catch (error) {
    console.error("Midtrans Error:", error);
    throw new Error("Failed to create transaction");
  }
};

export { createTransaction };
