import express from "express";
import AuthController from "../controllers/AuthController";
import { auth } from "../middleware/AuthMiddleware";
import { validateLoginRequestBody, validateRegisterRequestBody } from "../middleware/ValidationMiddleware";

const authRouter = express.Router();

authRouter.post("/register", validateRegisterRequestBody, AuthController.registerStaff);

authRouter.post("/login", validateLoginRequestBody, AuthController.loginStaff);

authRouter.post("/profile", auth, AuthController.getStaffProfile);

export default authRouter;