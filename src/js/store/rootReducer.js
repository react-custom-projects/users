import { combineReducers } from 'redux';
import users from './usersSlice/reducers/UsersReducer';

const rootReducer = combineReducers({
	users,
});

export default rootReducer;
