// import { MeterReading } from "../models/MeterReading";

import { MeterReading } from "../models/MeterReading";

// const parseAction = (reading: any) => {
//   const meterReadingDto = new MeterReading();
//   meterReadingDto.id = reading.id;
//   meterReadingDto.accountNumber = reading.account_number;
//   meterReadingDto.readingDate = new Date(reading.reading_date);
//   meterReadingDto.meterReading = reading.meter_reading;
//   return meterReadingDto;
// };

// export const parseMeterReading = (result: any) => {
//   const [reading] = JSON.parse(JSON.stringify(result));

//   return parseAction(reading);
// };

// export const parseMeterReadingList = (result: any) => {
//   const readings = JSON.parse(JSON.stringify(result));

//   return readings.map((reading: any) => {
//     return parseAction(reading);
//   });
// };

// export const parseMeterReadingFromBody = (body: any) => {
//   const meterReadingDto = new MeterReading(body.id, body.accountNumber, body.readingDate, body.meterReading);

//   return meterReadingDto;
// };

export async function mapToMeterReadings([results]: any[]): Promise<MeterReading[]> {
	const meterReadings: MeterReading[] = [];

	for (const result of results) {
		const meterReading = new MeterReading(
			result.id,
			result.account_number,
			result.reading_date,
			result.meter_reading
		);

		meterReadings.push(meterReading);
	}

	return meterReadings;
}

export async function mapToMeterReading([[results]]: any[]): Promise<MeterReading> {
	
	const meterReading = new MeterReading(
		results.id,
		results.account_number,
		results.reading_date,
		results.meter_reading
	);

	return meterReading;
}