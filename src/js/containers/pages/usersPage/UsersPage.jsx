import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//styles
import classes from './UsersPage.scss';
//actions
import {
	fetchUsersList,
	resetAppReducer,
	setRequiredEditUserId,
	showEditUserModal,
} from '../../../store/usersSlice/actions/UsersActions';
import {
	setEditUserFormCityProperties,
	setEditUserFormCompanyNameProperties,
	setEditUserFormEmailProperties,
	setEditUserFormNameProperties,
	setEditUserFormPhoneProperties,
	setEditUserFormWebsiteProperties,
} from '../../../store/usersSlice/actions/EditUserFormActions';
//selectors
import {
	getAppIsFetching,
	getAppUsersList,
} from '../../../store/usersSlice/selectors/UsersSelectors';
//routes
import { getHomePageUrl } from '../../../routing/routingConstants/AppUrls';
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

	const doubleClickHandler = ({ id, name, email, address: { city }, phone, website, company }) => {
		dispatch(setRequiredEditUserId(id));
		if (name) {
			dispatch(setEditUserFormNameProperties(name));
		}
		if (email) {
			dispatch(setEditUserFormEmailProperties(email));
		}
		if (city) {
			dispatch(setEditUserFormCityProperties(city));
		}
		if (phone) {
			dispatch(setEditUserFormPhoneProperties(phone));
		}
		if (website) {
			dispatch(setEditUserFormWebsiteProperties(website));
		}
		if (company.name) {
			dispatch(setEditUserFormCompanyNameProperties(company.name));
		}
		dispatch(showEditUserModal());
	};

	return (
		<div className="container">
			{isFetching ? (
				<div className="d-flex justify-content-center">
					<LoadingIcon />
				</div>
			) : (
				<>
					<p>
						<Link className={classes.link} to={getHomePageUrl()}>
							<i className="far fa-arrow-alt-left" /> Go back home
						</Link>
					</p>
					<div className={classes.wrapper}>
						{usersList.map((el) => (
							<User
								key={el.id}
								doubleClickHandler={() => doubleClickHandler(el)}
								phone={el.phone}
								companyName={el.company.name}
								name={el.name}
								email={el.email}
								website={el.website}
								city={el.address.city}
							/>
						))}
					</div>
				</>
			)}
			<EditUserModal />
		</div>
	);
};

export default UsersPage;
