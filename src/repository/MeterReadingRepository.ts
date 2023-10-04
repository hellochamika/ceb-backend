import pool from "../config/database";
import { MeterReading } from "../models/MeterReading";
import { mapToMeterReadings, mapToMeterReading } from "../utils/MeterReadingUtils";
import { HttpError } from 'routing-controllers';


class MeterReadingRepository {
	static async getAllReadings(): Promise<Array<MeterReading>> {

		const result = await mapToMeterReadings(await pool.query(
			"SELECT * FROM readings"
		));

		return result;
	}

	static async getReadingById(id: number): Promise<MeterReading> {

		const result = await mapToMeterReading(await pool.query(
			"SELECT * FROM readings WHERE id = ?",
			[id]
		));

		if (result === null) {
			throw new HttpError(404, "No meter reading found");
		}

		return result;
	}

	static async getAllReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {

		const result = await mapToMeterReadings(await pool.query(
			"SELECT * FROM readings WHERE account_number = ?",
			[accountNumber]
		));

		return result;
	}

	static async getLastReadingByAccountNumber(accountNumber: number): Promise<MeterReading> {

		const reading = await mapToMeterReading(await pool.query(
			"SELECT * FROM readings WHERE account_number = ? ORDER BY reading_date DESC LIMIT 1",
			[accountNumber]
		));

		return reading;


	}

	static async getLastTwoReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {

		const results = await mapToMeterReadings(await pool.query(
			"SELECT * FROM readings WHERE account_number = ? ORDER BY reading_date DESC LIMIT 2",
			[accountNumber]
		));

		return results;


	}

	static async createReading(meterReading: MeterReading): Promise<MeterReading> {
		let result;
		try {
			const result = await pool.query(
				`INSERT INTO readings (account_number,reading_date,meter_reading) VALUES (?,?,?)`,
				[
					meterReading.accountNumber,
					meterReading.readingDate,
					meterReading.meterReading,
				]
			);
			const [newResult] = JSON.parse(JSON.stringify(result));

			meterReading.id = newResult.insertId;

		} catch (error) {
			throw new HttpError(404, "No meter customer account found");
		}

		return meterReading;
	}

	static async updateReading(meterReading: MeterReading): Promise<MeterReading> {

		const result = await pool.query(
			`UPDATE readings SET account_number = ?, reading_date = ?, meter_reading = ?
		WHERE id = ?`,
			[
				meterReading.accountNumber,
				meterReading.readingDate,
				meterReading.meterReading,
				meterReading.id,
			]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		if (newResult.affectedRows === 0) {
			throw new HttpError(404, "No meter readings found");
		}

		return meterReading;
	}

	static async deleteReading(id: number): Promise<Boolean> {

		const result = await pool.query(
			`DELETE FROM readings WHERE id = ?`,
			[id]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		if (newResult.affectedRows === 0) {
			throw new HttpError(404, "No meter readings found");
		}

		return true;
	}
}

export default MeterReadingRepository;
