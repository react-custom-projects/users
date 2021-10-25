import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './Card.scss';

const Card = ({ children, classes, doubleClickHandler }) => (
	<div
		onDoubleClick={doubleClickHandler ? doubleClickHandler : () => {}}
		className={`${styles.shadowCard} ${classes ? classes : ''}`}
	>
		{children}
	</div>
);

Card.propTypes = {
	classes: PropTypes.string,
	doubleClickHandler: PropTypes.func,
};

export default Card;
