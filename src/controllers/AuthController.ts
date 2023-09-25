import express from "express";
import AuthService from "../services/AuthService";


class AuthController {

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


}

export default AuthController;