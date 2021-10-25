import React from 'react';
import { Link } from 'react-router-dom';
//styles
import classes from './HomePage.scss';
//routes
import { getUsersPageUrl } from '../../../routing/routingConstants/AppUrls';

const HomePage = () => (
	<div className={classes.wrapper}>
		<div className={classes.overlay}>
			<h1 className={classes.title}>WELCOME</h1>
			<Link className={classes.link} to={getUsersPageUrl()}>
				Check users list
			</Link>
		</div>
	</div>
);

export default HomePage;
