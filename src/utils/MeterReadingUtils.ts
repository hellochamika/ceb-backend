import { MeterReading } from "../models/MeterReading";
import { HttpError } from 'routing-controllers';

export async function mapToMeterReadings([results]: any[]): Promise<MeterReading[]> {
	const meterReadings: MeterReading[] = [];

	// if (results.length === 0) {
	// 	throw new HttpError(404, 'No meter readings found');
	// }

	for (const result of results) {
		const meterReading = new MeterReading(
			result.id,
			result.account_number,
			result.reading_date.toLocaleDateString('sv-SE'),
			result.meter_reading
		);

		meterReadings.push(meterReading);
	}

	return meterReadings;
}

export async function mapToMeterReading([[results]]: any[]): Promise<MeterReading> {

	if (results) {

		const meterReading = new MeterReading(
			results.id,
			results.account_number,
			results.reading_date.toLocaleDateString('sv-SE'),
			results.meter_reading
		);

		return meterReading;
	}
	else {
		return null;
	}
}