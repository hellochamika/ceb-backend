export class MeterReading {
  id: number;
  accountNumber: number;
  readingDate: Date;
  meterReading: number;

  constructor(id: number, accountNumber: number, readingDate: Date, meterReading: number) {
	this.id = id;
	this.accountNumber = accountNumber;
	this.readingDate = readingDate;
	this.meterReading = meterReading;
  }
}
