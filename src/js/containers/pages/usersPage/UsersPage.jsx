import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import classes from './UsersPage.scss';
//actions
import { fetchUsersList, resetAppReducer } from '../../../store/app/actions/AppActions';
//selectors
import { getAppIsFetching, getAppUsersList } from '../../../store/app/selectors/AppSelectors';
//components
import LoadingIcon from '../../../components/shared/loadingIcon/LoadingIcon';
import User from '../../../components/user/User';

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

	return (
		<div className="container">
			{isFetching ? (
				<LoadingIcon />
			) : (
				<div className={classes.wrapper}>
					{usersList.map((el) => (
						<User
							key={el.id}
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
		</div>
	);
};

export default UsersPage;
