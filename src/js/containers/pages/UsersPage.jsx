import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { fetchUsersList, resetAppReducer } from '../../store/app/actions/AppActions';
//selectors
import { getAppIsFetching, getAppUsersList } from '../../store/app/selectors/AppSelectors';
//components
import LoadingIcon from '../../components/shared/loadingIcon/LoadingIcon';

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
				<>
					{usersList.map((el) => (
						<div key={el.id}>{el.name}</div>
					))}
				</>
			)}
		</div>
	);
};

export default UsersPage;
