import { Router } from "express";
import { loginUser, signinUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/sign-up", signinUser);
export default authRouter;
