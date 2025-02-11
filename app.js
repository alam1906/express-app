import express from "express";
import transactionRoutes from "./src/routes/transaction_routes.js";
import { WebSocketServer } from "ws";
import { client } from "./src/controllers/transaction_controller.js";

const app = express();
const wss = new WebSocketServer({ port: 8080 });

//ws
wss.on("connection", (ws) => {
  console.log("client connected");
  client.add(ws);

  ws.on("close", () => {
    console.log("client disconnected");
    client.delete(ws);
  });
});

// app
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Anda ada di halaman Home");
});
app.use("/transaction", transactionRoutes);
app.listen(3000, () => {
  console.log("server dijalankan di port 3000");
});
