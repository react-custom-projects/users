//toast
import { toast } from 'react-toastify';
//constants
import { data } from '../../../constants/AppConstants';
//action types
import {
	RESET_APP_REDUCER,
	SET_IS_FETCHING_USERS_LIST_FALSE,
	SET_IS_FETCHING_USERS_LIST_TRUE,
	SET_USERS_LIST,
} from '../appActionTypes';

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
		dispatch(setUsersList(data));
	} catch (err) {
		toast.error('Something went wrong');
	} finally {
		dispatch(setIsFetchingUsersListFalse());
	}
};

export const resetAppReducer = () => ({
	type: RESET_APP_REDUCER,
});
