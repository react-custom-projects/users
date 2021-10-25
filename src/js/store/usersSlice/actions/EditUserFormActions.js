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

export const setEditUserFormNameProperties = (value) => ({
	type: SET_EDIT_USER_FORM_NAME_PROPERTIES,
	value,
});

export const setEditUserFormEmailProperties = (value) => ({
	type: SET_EDIT_USER_FORM_EMAIL_PROPERTIES,
	value,
});

export const setEditUserFormCityProperties = (value) => ({
	type: SET_EDIT_USER_FORM_CITY_PROPERTIES,
	value,
});

export const setEditUserFormPhoneProperties = (value) => ({
	type: SET_EDIT_USER_FORM_PHONE_PROPERTIES,
	value,
});

export const setEditUserFormWebsiteProperties = (value) => ({
	type: SET_EDIT_USER_FORM_WEBSITE_PROPERTIES,
	value,
});

export const setEditUserFormCompanyNameProperties = (value) => ({
	type: SET_EDIT_USER_FORM_COMPANY_NAME_PROPERTIES,
	value,
});

export const resetEditUserForm = () => ({ type: RESET_EDIT_USER_FORM });
