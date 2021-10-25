import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import classes from './UsersPage.scss';
//actions
import {
	fetchUsersList,
	resetAppReducer,
	showEditUserModal,
} from '../../../store/usersSlice/actions/UsersActions';
//selectors
import {
	getAppIsFetching,
	getAppUsersList,
} from '../../../store/usersSlice/selectors/UsersSelectors';
//components
import LoadingIcon from '../../../components/shared/loadingIcon/LoadingIcon';
import User from '../../../components/user/User';
import EditUserModal from '../../../components/modals/EditUserModal';

const UsersPage = () => {
	const dispatch = useDispatch(),
		isFetching = useSelector((state) => getAppIsFetching({ state })),
		usersList = useSelector((state) => getAppUsersList({ state }));

	useEffect(() => {
		dispatch(fetchUsersList());

		return () => {
			dispatch(resetAppReducer());
		};
	}, [dispatch]);

	const doubleClickHandler = (id) => {
		dispatch(showEditUserModal());
	};

	return (
		<div className="container">
			{isFetching ? (
				<LoadingIcon />
			) : (
				<div className={classes.wrapper}>
					{usersList.map((el) => (
						<User
							key={el.id}
							doubleClickHandler={() => doubleClickHandler(el.id)}
							phone={el.phone}
							companyName={el.company.name}
							name={el.name}
							email={el.email}
							website={el.website}
							city={el.address.city}
						/>
					))}
				</div>
			)}
			<EditUserModal />
		</div>
	);
};

export default UsersPage;
