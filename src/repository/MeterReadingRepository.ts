import pool from "../config/database";
import { MeterReading } from "../models/MeterReading";
import { mapToMeterReadings, mapToMeterReading } from "../utils/MeterReadingUtils";

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

		return result;
	}

	static async getAllReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {

		const result = await mapToMeterReadings(await pool.query(
			"SELECT * FROM readings WHERE account_number = ?",
			[accountNumber]
		));

		return result;
	}

	static async getLastTwoReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {

		const result = await mapToMeterReadings(await pool.query(
			"SELECT * FROM readings WHERE account_number = ? ORDER BY reading_date DESC LIMIT 2",
			[accountNumber]
		));

		if (result.length === 0) {
			throw new Error("No meter readings found");
		}

		return result;
	}

	static async createReading(meterReading: MeterReading): Promise<MeterReading> {

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
			throw new Error("Meter reading not found");
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
			throw new Error("Meter reading not found");
		}

		return true;
	}
}

export default MeterReadingRepository;
