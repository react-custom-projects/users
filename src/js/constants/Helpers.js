export const updateObject = (oldObject, UpdatedValues) => {
	return {
		...oldObject,
		...UpdatedValues,
	};
};

export const validateInput = ({ displayErrors, value }) => {
	const isValid = Object.values(displayErrors).every((el) => el === false);

	return {
		value: value,
		valid: isValid,
		touched: true,
		displayErrors,
	};
};
