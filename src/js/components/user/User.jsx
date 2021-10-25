import React from 'react';
import PropTypes from 'prop-types';
//styles
import classes from './User.scss';
//components
import Card from '../shared/card/Card';

const User = ({ name, email, city, phone, website, companyName, doubleClickHandler }) => (
	<Card classes={classes.wrapper} doubleClickHandler={doubleClickHandler}>
		<h3 className={classes.name}>{name}</h3>
		<div className={classes.bodyWrapper}>
			<p className={classes.text}>{email}</p>
			<p className={classes.text}>{city}</p>
			<p className={classes.text}>{phone}</p>
			<p className={classes.text}>{website}</p>
			<p className={classes.text}>{companyName}</p>
		</div>
	</Card>
);

User.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	doubleClickHandler: PropTypes.func.isRequired,
};

export default User;
