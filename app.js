import express from "express";
import transactionRoutes from "./src/routes/transaction_routes.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Anda ada di halaman Home");
});

app.use("/transaction", transactionRoutes);

app.listen(3000, () => {
  console.log("server dijalankan di port 3000");
});
