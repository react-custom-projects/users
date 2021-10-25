import React from 'react';
import { Link } from 'react-router-dom';
//routes
import { getUsersPageUrl } from '../../routing/routingConstants/AppUrls';

const HomePage = () => {
	return (
		<div>
			<Link to={getUsersPageUrl()}>Users</Link>
		</div>
	);
};

export default HomePage;
