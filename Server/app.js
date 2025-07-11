import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import morgan from "morgan";
import visitedRouter from "./routes/visitedRouter.js";

const app = express();
app.use(express.json());
const port = 3000;
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use("/api/auth", authRouter);
app.use("/api/visited", visitedRouter);

app.get("/", (req, res) => {
  res.json("Success!");
});

app.listen(port, () => {
  console.log("App is listning on port ", port);
});
