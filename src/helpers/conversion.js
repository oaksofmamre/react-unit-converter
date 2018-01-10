import convert from "convert-units";

export function availableUnits(inputUnits) {
	return convert()
		.from(inputUnits)
		.possibilities();
}

export function convertedValue(inputValue, inputUnits, outputUnits) {
	return convert(inputValue)
		.from(inputUnits)
		.to(outputUnits);
}

export function measurementTypes() {
	return convert().measures();
}

export function unitsByMeasurementType(measurementType) {
	return convert().possibilities(measurementType);
}
