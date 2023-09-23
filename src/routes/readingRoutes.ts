import express from "express";
import MeterReadingController from "../controllers/MeterReadingController";

export default (router: express.Router) => {
  router.get("/readings", MeterReadingController.index);

  router.get("/readings/:id", MeterReadingController.getMeterReadingById);

  router.get("/readings/account/:accountNumber", MeterReadingController.getMeterReadingsByAccountNumber);

  router.get("/readings/account/:accountNumber/last-two", MeterReadingController.getLastTwoReadingsByAccountNumber);

  router.post("/readings/", MeterReadingController.create);

  router.put("/readings/:id/edit", MeterReadingController.update);

  router.delete("/readings/:id", MeterReadingController.delete);
};
