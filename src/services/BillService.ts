import { BillDTO } from "../dto/BillDTO";

class BillService {
	static calculate(billDTO: BillDTO): BillDTO {

		const days = Math.ceil(
			(Date.parse(billDTO.currentMeterReadingDate.toString()) -
				Date.parse(billDTO.previousMeterReadingDate.toString())) /
			(1000 * 3600 * 24)
		);

		const consumption =
			billDTO.currentMeterReading - billDTO.previousMeterReading;

		const firstRangeRate = 20;
		const secondRangeRate = 35;
		const thirdRangeStartingRate = 40;

		const firstRangeFixedCharge = 500;
		const secondRangeFixedCharge = 1000;
		const thirdRangeFixedCharge = 1500;

		let fixedCharge = 0;
		let firstRangeCharge = 0;
		let secondRangeCharge = 0;
		let thirdRangeCharge = 0;

		if (consumption <= days) {
			firstRangeCharge = consumption * firstRangeRate;
			fixedCharge = firstRangeFixedCharge;
		} else if (consumption <= 3 * days) {
			firstRangeCharge = days * firstRangeRate;

			secondRangeCharge = (consumption - days) * secondRangeRate;

			fixedCharge = secondRangeFixedCharge;
		} else {
			firstRangeCharge = days * firstRangeRate;
			secondRangeCharge = 2 * days * secondRangeRate;

			const thirdRangeUnits = consumption - days * 3;

			thirdRangeCharge =
				(thirdRangeUnits / 2) *
				(2 * thirdRangeStartingRate + (thirdRangeUnits - 1));

			fixedCharge = thirdRangeFixedCharge;
		}

		const totalCharge =
			fixedCharge + firstRangeCharge + secondRangeCharge + thirdRangeCharge;

		billDTO.firstRangeCharge = firstRangeCharge;
		billDTO.secondRangeCharge = secondRangeCharge;
		billDTO.thirdRangeCharge = thirdRangeCharge;

		billDTO.fixedCharge = fixedCharge;
		billDTO.totalCharge = totalCharge;

		return billDTO;
	}
}

export default BillService;
