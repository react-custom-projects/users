import { apiService } from './HttpService';

class UsersService {
	static fetchUsersList() {
		return apiService({
			method: 'GET',
			url: '/af2c8975-81de-4e65-91fb-00d6a254ab09',
		});
	}
}

export default UsersService;
