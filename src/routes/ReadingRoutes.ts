import express from "express";
import MeterReadingController from "../controllers/MeterReadingController";
import { validateAccountNumberRequestParams, validateMeterReadingRequestBody } from "../middleware/ValidationMiddleware";


const readingsRouter = express.Router();


readingsRouter.get("/", MeterReadingController.index);

readingsRouter.get("/:id", MeterReadingController.getMeterReadingById);

readingsRouter.get("/account/:accountNumber", validateAccountNumberRequestParams, MeterReadingController.getMeterReadingsByAccountNumber);

readingsRouter.get("/account/:accountNumber/last", validateAccountNumberRequestParams, MeterReadingController.getLastReadingByAccountNumber);

readingsRouter.post("/", validateMeterReadingRequestBody, MeterReadingController.create);

readingsRouter.put("/:id/edit", validateMeterReadingRequestBody, MeterReadingController.update);

readingsRouter.delete("/:id", MeterReadingController.delete);


export default readingsRouter;