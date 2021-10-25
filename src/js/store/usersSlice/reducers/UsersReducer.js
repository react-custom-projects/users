//lodash
import { cloneDeep } from 'lodash';
//constants
import { updateObject } from '../../../constants/Helpers';
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

const initialState = {
	isFetching: false,
	usersList: [],
	isEditUserModal: false,
	editId: null,
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
		case SET_REQUIRED_EDIT_USER_ID: {
			return updateObject(state, { editId: action.id });
		}
		case EDIT_SELECTED_USER_DATA: {
			const usersList = cloneDeep(state.usersList),
				userToEdit = usersList.find((el) => el.id === state.editId),
				{ name, email, city, phone, website, companyName } = action.payload;

			userToEdit.name = name;
			userToEdit.email = email;
			userToEdit.address.city = city;
			userToEdit.phone = phone;
			userToEdit.website = website;
			userToEdit.company.name = companyName;

			return updateObject(state, { usersList });
		}
		case RESET_APP_REDUCER: {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
