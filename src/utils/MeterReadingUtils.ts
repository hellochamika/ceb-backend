import { MeterReading } from "../models/MeterReading";
import { HttpError } from 'routing-controllers';

export async function mapToMeterReadings([results]: any[]): Promise<MeterReading[]> {
	const meterReadings: MeterReading[] = [];

	if (results.length === 0) {
		throw new HttpError(404, 'No meter readings found');
	}

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

	if (!results) {
		throw new HttpError(404, 'No meter reading found');
	}

	const meterReading = new MeterReading(
		results.id,
		results.account_number,
		results.reading_date,
		results.meter_reading
	);

	return meterReading;
}