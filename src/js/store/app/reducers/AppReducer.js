//constants
import { updateObject } from '../../../constants/Helpers';
//action types
import {
	HIDE_EDIT_USER_MODAL,
	RESET_APP_REDUCER,
	SET_IS_FETCHING_USERS_LIST_FALSE,
	SET_IS_FETCHING_USERS_LIST_TRUE,
	SET_USERS_LIST,
	SHOW_EDIT_USER_MODAL,
} from '../appActionTypes';

const initialState = {
	isFetching: false,
	usersList: [],
	isEditUserModal: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_LIST: {
			return updateObject(state, { usersList: action.list });
		}
		case SET_IS_FETCHING_USERS_LIST_TRUE: {
			return updateObject(state, { isFetching: true });
		}
		case SET_IS_FETCHING_USERS_LIST_FALSE: {
			return updateObject(state, { isFetching: false });
		}
		case SHOW_EDIT_USER_MODAL: {
			return updateObject(state, { isEditUserModal: true });
		}
		case HIDE_EDIT_USER_MODAL: {
			return updateObject(state, { isEditUserModal: false });
		}
		case RESET_APP_REDUCER: {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
