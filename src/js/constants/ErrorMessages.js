class ErrorMessages {
	static getRequiredErrorMessage() {
		return 'Required Field.';
	}
	static getIdenticalErrorMessage() {
		return 'Passwords are not identical.';
	}
	static getEmailErrorMessage() {
		return 'Invalid Email.';
	}
	static getAlphaNumErrorMessage() {
		return 'Must be alphanumeric.';
	}
	static getNumErrorMessage() {
		return 'Needs to be a number.';
	}
	static getPhoneNumErrorMessage() {
		return 'Please enter a valid phone number.';
	}
	static getMinLengthErrorMessage({ num, type }) {
		return `Minimum ${num} ${type}.`;
	}
	static getMaxLengthErrorMessage({ num, type }) {
		return `Maximum ${num} ${type}.`;
	}
	static getCharErrorMessage() {
		return 'Accepts characters only.';
	}
}

export default ErrorMessages;
