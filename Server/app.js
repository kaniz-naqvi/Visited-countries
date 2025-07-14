import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import morgan from "morgan";
import visitedRouter from "./routes/visitedRouter.js";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,
      httpOnly: true,
    },
  })
);
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
