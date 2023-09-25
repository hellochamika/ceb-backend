import express from "express";
import AuthController from "../controllers/AuthController";


const authRouter = express.Router();

authRouter.post("/login", AuthController.loginStaff);

export default authRouter;