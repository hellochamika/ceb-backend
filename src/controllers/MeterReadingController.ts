import express from "express";
import MeterReadingService from "../services/MeterReadingService";
import { MeterReading } from "../models/MeterReading";


class MeterReadingController {
	static async index(
		req: express.Request,
		res: express.Response
	) {
		try {

			const readings = await MeterReadingService.getMeterReadings();

			res.status(200).json({
				status: "Success",
				data: readings,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async getMeterReadingById(
		req: express.Request,
		res: express.Response
	) {
		try {
			const id = Number(req.params.id);
			const reading = await MeterReadingService.getMeterReadingById(id);
			res.status(200).json({
				status: "Success",
				data: reading,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async getMeterReadingsByAccountNumber(
		req: express.Request,
		res: express.Response
	) {
		try {
			const accountNumber = Number(req.params.accountNumber);
			const readings =
				await MeterReadingService.getMeterReadingsByAccountNumber(
					accountNumber
				);
			res.status(200).json({
				status: "Success",
				data: readings,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async getLastTwoReadingsByAccountNumber(
		req: express.Request,
		res: express.Response
	) {
		try {
			const accountNumber = Number(req.params.accountNumber);
			const readings =
				await MeterReadingService.getLastTwoReadingsByAccountNumber(
					accountNumber
				);
			res.status(200).json({
				status: "Success",
				data: readings,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async create(
		req: express.Request,
		res: express.Response
	) {
		try {
			const meterReading = new MeterReading(
				req.body.id,
				req.body.accountNumber,
				req.body.readingDate,
				req.body.meterReading
			);

			const reading = await MeterReadingService.createMeterReading(meterReading);

			res.status(200).json({
				status: "Success",
				data: reading,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async update(
		req: express.Request,
		res: express.Response
	) {

		try {
			const meterReading = new MeterReading(
				Number(req.params.id),
				req.body.accountNumber,
				req.body.readingDate,
				req.body.meterReading
			);
			const reading = await MeterReadingService.updateMeterReading(meterReading);

			res.status(200).json({
				status: "Success",
				data: reading,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}

	static async delete(
		req: express.Request,
		res: express.Response
	) {

		try {
			const id = Number(req.params.id);
			const reading = await MeterReadingService.deleteMeterReading(id);
			res.status(200).json({
				status: "Success",
				data: reading,
			});
		} catch (err) {
			res.status(err.httpCode).json({
				status: "Failed",
				message: err.message,
			});
		}
	}


}

export default MeterReadingController;