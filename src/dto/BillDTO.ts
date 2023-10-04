export class BillDTO {

	name: string;
	accountNumber: number;

	currentMeterReading: number;
	currentMeterReadingDate: Date;

	previousMeterReading: number;
	previousMeterReadingDate: Date;

	firstRangeCharge: number;
	secondRangeCharge: number;
	thirdRangeCharge: number;

	fixedCharge: number;
	totalCharge: number;

	constructor(
		name: string,
		accountNumber: number,

		currentMeterReading: number = null,
		currentMeterReadingDate: Date = null,

		previousMeterReading: number = null,
		previousMeterReadingDate: Date = null,

		firstRangeCharge: number = null,
		secondRangeCharge: number = null,
		thirdRangeCharge: number = null,

		fixedCharge: number = null,
		totalCharge: number = null
	) {
		this.name = name;
		this.accountNumber = accountNumber;

		this.currentMeterReading = currentMeterReading;
		this.currentMeterReadingDate = currentMeterReadingDate;

		this.previousMeterReading = previousMeterReading;
		this.previousMeterReadingDate = previousMeterReadingDate;

		this.firstRangeCharge = firstRangeCharge;
		this.secondRangeCharge = secondRangeCharge;
		this.thirdRangeCharge = thirdRangeCharge;

		this.fixedCharge = fixedCharge;
		this.totalCharge = totalCharge;
	}
}
