import express from "express";
import { Staff } from "../models/Staff";
import AuthService from "../services/AuthService";
import SecurityService from "../services/SecurityService";
import StaffService from "../services/StaffService";
import { z } from 'zod';


class AuthController {


	static async registerStaff(
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

			const token = await AuthService.loginStaff(newStaffMember.email, req.body.password);

			res.status(200).json({
				status: "Success",
				data: { 'token': token },

			});
		} catch (error) {
			console.log(error);

			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async loginStaff(
		req: express.Request,
		res: express.Response
	) {
		try {

			const { email, password } = req.body;

			const token = await AuthService.loginStaff(email, password);

			res.status(200).json({
				status: "Success",
				data: { 'token': token },
			});

		} catch (error) {
			res.status(error.httpCode || 500).json({
				status: "Failed",
				message: error.message,
			});
		}
	}

	static async getStaffProfile(
		req: express.Request,
		res: express.Response
	) {
		try {

			const staff = req.body.staff;

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


}

export default AuthController;