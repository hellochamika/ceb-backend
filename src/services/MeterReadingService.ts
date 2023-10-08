import { MeterReading } from "../models/MeterReading";
import { LastReadingDTO } from "../dto/LastReadingDTO";
import MeterReadingRepository from "../repository/MeterReadingRepository";
import CustomerRepository from "../repository/CustomerRepository";

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

	static async getLastReadingByAccountNumber(accountNumber: number): Promise<LastReadingDTO> {

		const customer = await CustomerRepository.getCustomerById(accountNumber);

		const reading = await MeterReadingRepository.getLastReadingByAccountNumber(accountNumber);

		if (reading === null) {
			return new LastReadingDTO(
				customer.accountNumber,
				customer.name,
				0,
				null
			);
		}

		return new LastReadingDTO(
			customer.accountNumber,
			customer.name,
			reading.meterReading,
			reading.readingDate
		);
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