import { Router } from "express";
import {
  checkAuth,
  loginUser,
  signinUser,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", loginUser);

authRouter.post("/sign-up", signinUser);

authRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
});

authRouter.get("/me", checkAuth);

export default authRouter;
