import express from "express";
import MeterReadingController from "../controllers/MeterReadingController";


const readingsRouter = express.Router();


readingsRouter.get("/", MeterReadingController.index);

readingsRouter.get("/:id", MeterReadingController.getMeterReadingById);

readingsRouter.get("/account/:accountNumber", MeterReadingController.getMeterReadingsByAccountNumber);

readingsRouter.get("/account/:accountNumber/last-two", MeterReadingController.getLastTwoReadingsByAccountNumber);

readingsRouter.post("/", MeterReadingController.create);

readingsRouter.put("/:id/edit", MeterReadingController.update);

readingsRouter.delete("/:id", MeterReadingController.delete);


export default readingsRouter;