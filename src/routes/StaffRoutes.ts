import express from "express";
import StaffController from "../controllers/StaffController";


const staffRouter = express.Router();


staffRouter.get("/", StaffController.index);

staffRouter.get("/:id", StaffController.getById);

staffRouter.post("/", StaffController.create);

staffRouter.put("/:id/edit", StaffController.update);

staffRouter.delete("/:id", StaffController.delete);


export default staffRouter;


