import express from "express";
import StaffController from "../controllers/StaffController";


const staffRouter = express.Router();


staffRouter.get("/", StaffController.index);

staffRouter.get("/:id", StaffController.getById);

staffRouter.put("/:id/edit", StaffController.update);

staffRouter.put("/:id/approve", StaffController.approve);

staffRouter.delete("/:id", StaffController.delete);


export default staffRouter;


