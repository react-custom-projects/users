// used to check if the given field is required
const validateRequired = (inputValue) => {
	return inputValue.trim() === '';
};

// used to validate the minLength of the given field
const validateMinLength = (inputValue, number) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (inputValue.trim().length < number) {
		isError = true;
	}
	return isError;
};

// used to validate the maxLength of the given field
const validateMaxLength = (inputValue, number) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (inputValue.trim().length > number) {
		isError = true;
	}
	return isError;
};

// used to validate the given url
const validateUrl = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (
		!/^(https?:\/\/)?(www.)[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
			inputValue.trim()
		)
	) {
		isError = true;
	}
	return isError;
};

// used to validate regEx
const validateRegEx = (inputValue, regEx) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!regEx.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check if number
const validateNumber = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[0-9]*$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check if character
const validateChar = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[A-Za-z]+$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

// used to check alpha numeric with dots (.)
const validateAlphaNumeric = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (!/^[a-zA-Z0-9.]*$/.test(inputValue.trim())) {
		isError = true;
	}
	return isError;
};

const validateEmail = (inputValue) => {
	let isError = false;
	if (inputValue.trim().length === 0) {
		isError = false;
	} else if (
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
			inputValue.trim()
		)
	) {
		isError = true;
	}
	return isError;
};
