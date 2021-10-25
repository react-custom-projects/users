//toast
import { toast } from 'react-toastify';
//constants
import { data } from '../../../constants/AppConstants';
//action types
import {
	EDIT_SELECTED_USER_DATA,
	HIDE_EDIT_USER_MODAL,
	RESET_APP_REDUCER,
	SET_IS_FETCHING_USERS_LIST_FALSE,
	SET_IS_FETCHING_USERS_LIST_TRUE,
	SET_REQUIRED_EDIT_USER_ID,
	SET_USERS_LIST,
	SHOW_EDIT_USER_MODAL,
} from '../UsersActionTypes';
//selectors
import {
	getEditUserFormCity,
	getEditUserFormCompanyName,
	getEditUserFormEmail,
	getEditUserFormName,
	getEditUserFormPhone,
	getEditUserFormWebsite,
} from '../selectors/EditUserFormSelectors';
//actions
import { resetEditUserForm } from './EditUserFormActions';

const setUsersList = (list) => ({
	type: SET_USERS_LIST,
	list,
});

const setIsFetchingUsersListTrue = () => ({ type: SET_IS_FETCHING_USERS_LIST_TRUE });

const setIsFetchingUsersListFalse = () => ({ type: SET_IS_FETCHING_USERS_LIST_FALSE });

// there is no need for asynchronous action here, but i'm adding it to show the code if it's an API call
export const fetchUsersList = () => async (dispatch) => {
	dispatch(setIsFetchingUsersListTrue());
	try {
		await dispatch(setUsersList(data));
	} catch (err) {
		toast.error('Something went wrong');
	} finally {
		dispatch(setIsFetchingUsersListFalse());
	}
};

export const showEditUserModal = () => ({ type: SHOW_EDIT_USER_MODAL });

export const hideEditUserModal = () => ({ type: HIDE_EDIT_USER_MODAL });

export const setRequiredEditUserId = (id) => ({
	type: SET_REQUIRED_EDIT_USER_ID,
	id,
});

export const closeEditUserModal = () => (dispatch) => {
	dispatch(hideEditUserModal());
	dispatch(resetEditUserForm());
	dispatch(setRequiredEditUserId(null));
};

export const editSelectedUserData = () => (dispatch, getState) => {
	const state = getState(),
		name = getEditUserFormName({ state }).value,
		email = getEditUserFormEmail({ state }).value,
		city = getEditUserFormCity({ state }).value,
		phone = getEditUserFormPhone({ state }).value,
		website = getEditUserFormWebsite({ state }).value,
		companyName = getEditUserFormCompanyName({ state }).value;

	dispatch({
		type: EDIT_SELECTED_USER_DATA,
		payload: {
			name,
			email,
			city,
			phone,
			website,
			companyName,
		},
	});
	dispatch(closeEditUserModal());
};

export const resetAppReducer = () => ({
	type: RESET_APP_REDUCER,
});
