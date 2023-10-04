import MeterReadingRepository from "../repository/MeterReadingRepository";
import CustomerRepository from "../repository/CustomerRepository";
import { BillDTO } from "../dto/BillDTO";
import BillService from "./BillService";

class CustomerService {

	static async getBill(accountNumber: number): Promise<BillDTO> {

		const customer = await CustomerRepository.getCustomerById(accountNumber);

		const readings = await MeterReadingRepository.getLastTwoReadingsByAccountNumber(accountNumber);

		const billDTO = new BillDTO(
			customer.name,
			customer.accountNumber
		);

		if (readings.length > 0) {
			billDTO.currentMeterReading = readings[0].meterReading;
			billDTO.currentMeterReadingDate = readings[0].readingDate;
		}

		if (readings.length > 1) {
			billDTO.previousMeterReading = readings[1].meterReading;
			billDTO.previousMeterReadingDate = readings[1].readingDate;

			const newBillDTO = BillService.calculate(billDTO);

			return newBillDTO;
		}

		return billDTO;
	}

}

export default CustomerService;