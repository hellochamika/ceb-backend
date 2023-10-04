import express from "express";
import CustomerService from "../services/CustomerService";

class CustomerController {

	static async getBill(
		req: express.Request,
		res: express.Response
	) {

		try {
			const accountNumber = Number(req.params.accountNumber);
			const bill = await CustomerService.getBill(accountNumber);
			res.status(200).json({
				status: "Success",
				data: bill,
			});
		} catch (err) {
			res.status(err.httpCode || 500).json({
				status: "Failed",
				message: err.message,
			});
		}

	}

}

export default CustomerController;