//action types
import {
	RESET_EDIT_USER_FORM,
	SET_EDIT_USER_FORM_CITY_PROPERTIES,
	SET_EDIT_USER_FORM_COMPANY_NAME_PROPERTIES,
	SET_EDIT_USER_FORM_EMAIL_PROPERTIES,
	SET_EDIT_USER_FORM_NAME_PROPERTIES,
	SET_EDIT_USER_FORM_PHONE_PROPERTIES,
	SET_EDIT_USER_FORM_WEBSITE_PROPERTIES,
} from '../UsersActionTypes';
//constants
import { updateObject, validateInput } from '../../../constants/Helpers';
import {
	validateChar,
	validateEmail,
	validateLink,
	validateMinLength,
	validateRequired,
} from '../../../constants/CustomValidators';

const initialState = {
	name: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isCharError: false,
		},
		valid: false,
		touched: false,
	},
	email: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isEmailError: false,
		},
		valid: false,
		touched: false,
	},
	city: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isCharError: false,
		},
		valid: false,
		touched: false,
	},
	phone: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isMinLengthError: false,
		},
		valid: false,
		touched: false,
	},
	website: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isLinkError: false,
		},
		valid: false,
		touched: false,
	},
	companyName: {
		value: '',
		displayErrors: {
			isRequiredError: false,
			isCharError: false,
		},
		valid: false,
		touched: false,
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EDIT_USER_FORM_NAME_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isCharError: validateChar(action.value),
			};

			return updateObject(state, {
				name: validateInput({ displayErrors, value: action.value }),
			});
		}
		case SET_EDIT_USER_FORM_EMAIL_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isEmailError: validateEmail(action.value),
			};

			return updateObject(state, {
				email: validateInput({ displayErrors, value: action.value }),
			});
		}
		case SET_EDIT_USER_FORM_CITY_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isCharError: validateChar(action.value),
			};

			return updateObject(state, {
				city: validateInput({ displayErrors, value: action.value }),
			});
		}
		case SET_EDIT_USER_FORM_PHONE_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isMinLengthError: validateMinLength(action.value, 8),
			};

			return updateObject(state, {
				phone: validateInput({ displayErrors, value: action.value }),
			});
		}
		case SET_EDIT_USER_FORM_WEBSITE_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isLinkError: validateLink(action.value),
			};
			return updateObject(state, {
				website: validateInput({ displayErrors, value: action.value }),
			});
		}
		case SET_EDIT_USER_FORM_COMPANY_NAME_PROPERTIES: {
			const displayErrors = {
				isRequiredError: validateRequired(action.value),
				isCharError: validateChar(action.value),
			};

			return updateObject(state, {
				companyName: validateInput({ displayErrors, value: action.value }),
			});
		}
		case RESET_EDIT_USER_FORM: {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
