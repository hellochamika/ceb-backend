export class LastReadingDTO {
	accountNumber: number;
	name: string;
	lastReading: number;
	lastReadingDate: Date;

	constructor(accountNumber: number, name: string, lastReading: number, lastReadingDate: Date) {
		this.accountNumber = accountNumber;
		this.name = name;
		this.lastReading = lastReading;
		this.lastReadingDate = lastReadingDate;
	}

}
