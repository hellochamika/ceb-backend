import { MeterReading } from "../models/MeterReading";
import MeterReadingRepository from "../repository/MeterReadingRepository";

class MeterReadingService {
	static async getMeterReadings(): Promise<Array<MeterReading>> {
		return await MeterReadingRepository.getAllReadings();
	}

	static async getMeterReadingById(id: number): Promise<MeterReading> {
		return await MeterReadingRepository.getReadingById(id);
	}

	static async getMeterReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {
		return await MeterReadingRepository.getAllReadingsByAccountNumber(accountNumber);
	}

	static async getLastTwoReadingsByAccountNumber(accountNumber: number): Promise<Array<MeterReading>> {
		return await MeterReadingRepository.getLastTwoReadingsByAccountNumber(accountNumber);
	}

	static async createMeterReading(meterReading: MeterReading): Promise<MeterReading> {
		return await MeterReadingRepository.createReading(meterReading);
	}

	static async updateMeterReading(meterReading: MeterReading): Promise<MeterReading> {
		return await MeterReadingRepository.updateReading(meterReading);
	}

	static async deleteMeterReading(id: number): Promise<Boolean> {
		return await MeterReadingRepository.deleteReading(id);
	}
}

export default MeterReadingService;