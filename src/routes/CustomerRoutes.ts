import express from "express";
import CustomerController from "../controllers/CustomerController";
import { validateAccountNumberRequestParams } from "../middleware/ValidationMiddleware";

const customerRoutes = express.Router();

customerRoutes.get("/account/:accountNumber/bill", validateAccountNumberRequestParams, CustomerController.getBill);

export default customerRoutes;