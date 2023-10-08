import { MeterReading } from "../models/MeterReading";

export async function mapToMeterReadings([results]: any[]): Promise<
	MeterReading[]
> {
	const meterReadings: MeterReading[] = [];

	for (const result of results) {
		const meterReading = new MeterReading(
			result.id,
			result.account_number,
			result.reading_date.toLocaleDateString("sv-SE"),
			result.meter_reading
		);

		meterReadings.push(meterReading);
	}

	return meterReadings;
}

export async function mapToMeterReading([
	[results],
]: any[]): Promise<MeterReading> {
	if (results) {
		const meterReading = new MeterReading(
			results.id,
			results.account_number,
			results.reading_date.toLocaleDateString("sv-SE"),
			results.meter_reading
		);

		return meterReading;
	} else {
		return null;
	}
}