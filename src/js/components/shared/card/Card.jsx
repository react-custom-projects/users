import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './Card.scss';

const Card = ({ children, classes }) => (
	<div className={`${styles.shadowCard} ${classes ? classes : ''}`}>{children}</div>
);

Card.propTypes = {
	classes: PropTypes.string,
};

export default Card;
