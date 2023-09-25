import express from "express";
import StaffService from "../services/StaffService";
import { Staff } from "../models/Staff";
import { StaffDTO } from "../dto/StaffDTO";
import SecurityService from "../services/SecurityService";


class StaffController {
	static async index(
		req: express.Request,
		res: express.Response
	) {
		try {
			const staff = await StaffService.getStaff();

			res.status(200).json({
				status: "Success",
				data: staff,
			});
		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async getById(
		req: express.Request,
		res: express.Response
	) {
		try {
			const id = Number(req.params.id);
			const staff = await StaffService.getStaffById(id);
			res.status(200).json({
				status: "Success",
				data: staff,
			});
		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async create(
		req: express.Request,
		res: express.Response
	) {
		try {
			const staffMember = new Staff(
				0,
				req.body.firstName,
				req.body.lastName,
				req.body.email,
				await SecurityService.hashPassword(req.body.password),
			);

			const newStaffMember = await StaffService.createStaff(staffMember);

			res.status(200).json({
				status: "Success",
				data: newStaffMember,
			});
		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async update(
		req: express.Request,
		res: express.Response
	) {

		try {
			const staff = new StaffDTO(
				Number(req.params.id),
				req.body.firstName,
				req.body.lastName,
				req.body.email,
			);
			const updatedStaff = await StaffService.updateStaff(staff);
			res.status(200).json({
				status: "Success",
				data: updatedStaff,
			});
		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async delete(
		req: express.Request,
		res: express.Response
	) {

		try {
			const id = Number(req.params.id);
			const result = await StaffService.deleteStaff(id);
			res.status(200).json({
				status: "Success",
				data: result,
			});

		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}


}

export default StaffController;