import { combineReducers } from 'redux';
//slices
import users from './usersSlice/reducers/UsersReducer';
import editUser from './usersSlice/reducers/EditUserFormReducer';

const rootReducer = combineReducers({
	users,
	editUser,
});

export default rootReducer;
