import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/store.config.js";
import router from "./routes/store.route.js";

const app = express();
const PORT = process.env.PORT;

dotenv.config();
dbConnect();

app.use(express.json(), cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`your server running in port ${PORT}`);
});
