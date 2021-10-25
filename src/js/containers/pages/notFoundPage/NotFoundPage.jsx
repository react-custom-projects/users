import React from 'react';
import { Link } from 'react-router-dom';
//styles
import classes from './NotFoundPage.scss';

const NotFoundPage = () => (
	<div className={classes.wrapper}>
		<h1 className={classes.title}>404</h1>
		<p className={classes.info}>Oops! Something is wrong.</p>
		<Link to="/" className={classes.goBack}>
			Go back to home page.
		</Link>
	</div>
);

export default NotFoundPage;
