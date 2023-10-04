import express from "express";
import CustomerController from "../controllers/CustomerController";

const customerRoutes = express.Router();

customerRoutes.get("/account/:accountNumber/bill", CustomerController.getBill);

export default customerRoutes;