import React from 'react';
import PropTypes from 'prop-types';
//styles
import styles from './Card.scss';
//custom hooks
import useTilt from '../../../customHooks/UseTilt';

const Card = ({ children, classes, doubleClickHandler }) => {
	const ref = useTilt();

	return (
		<div
			ref={ref}
			onDoubleClick={doubleClickHandler ? doubleClickHandler : () => {}}
			className={`${styles.shadowCard} ${classes ? classes : ''}`}
		>
			{children}
		</div>
	);
};

Card.propTypes = {
	classes: PropTypes.string,
	doubleClickHandler: PropTypes.func,
};

export default Card;
