import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//styles
import classes from './Modal.scss';

const Modal = ({
	headerCloseHandler,
	show,
	enableHeader,
	customTitle,
	title,
	headerBtns,
	isHeaderNoCloseBtn,
	enableFooter,
	footerBtns,
	isCancelClickOnOverlay,
	maxWidth,
	children,
}) => {
	const modalWrapper = useRef(null);

	const shortcutsHandler = useCallback(
		(event) => {
			if (event.key === 'Escape' && headerCloseHandler && show) headerCloseHandler();
		},
		[headerCloseHandler, show]
	);

	useEffect(() => {
		window.addEventListener('keydown', shortcutsHandler);

		return () => {
			window.removeEventListener('keydown', shortcutsHandler);
		};
	}, [shortcutsHandler]);

	const renderHeader = () => {
		if (enableHeader === false) {
			return;
		}
		return (
			<div className={classes.modalHeader}>
				<div>
					{customTitle ? customTitle : <h4 className={classes.modalTitle}>{title}</h4>}
					<div>
						{headerBtns && renderModalBtns(headerBtns)}
						{!isHeaderNoCloseBtn && (
							<button className={classes.headerCloseBtn} onClick={headerCloseHandler}>
								×
							</button>
						)}
					</div>
				</div>
			</div>
		);
	};

	const renderFooter = () => {
		if (enableFooter === false) {
			return;
		}
		return <div className={classes.modalFooter}>{footerBtns && renderModalBtns(footerBtns)}</div>;
	};

	const renderModalBtns = (buttons) =>
		buttons.map((el, i) => {
			let buttonColorClass = classes.modalBtnPrimary;

			if (el.color === 'red') {
				buttonColorClass = classes.modalBtnDanger;
			} else if (el.color === 'grey') {
				buttonColorClass = classes.modalBtnSecondary;
			} else if (el.color === 'green') {
				buttonColorClass = classes.modalBtnSuccess;
			} else if (el.color === 'yellow') {
				buttonColorClass = classes.modalBtnWarning;
			} else if (el.color === 'lightBlue') {
				buttonColorClass = classes.modalBtnInfo;
			} else if (el.color === 'black') {
				buttonColorClass = classes.modalBtnDark;
			}

			return (
				<Fragment key={i}>
					<button
						className={`${classes.modalBtn} ${buttonColorClass}`}
						onClick={el.click}
						disabled={el.disabled}
					>
						<span className={classes.btnContent}>
							{el.icon && <i className={`fas ${el.icon} icon`} />}
							{el.label}
						</span>
					</button>
				</Fragment>
			);
		});

	return (
		<div
			className={`${classes.modalWindow} ${!show ? classes.inactiveModal : ''}`}
			onClick={(e) => {
				if (e.target === modalWrapper.current && !isCancelClickOnOverlay) {
					headerCloseHandler();
				}
			}}
		>
			<div className={classes.modalWrapper} ref={modalWrapper}>
				<div
					className={`${classes.modal} ${show ? classes.animateModal : ''}`}
					style={{ maxWidth: maxWidth ? maxWidth : '' }}
				>
					{renderHeader()}
					<div className={classes.modalBody}>{show ? children : null}</div>
					{renderFooter()}
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	enableHeader: PropTypes.bool,
	title: PropTypes.string,
	customTitle: PropTypes.node,
	headerBtns: PropTypes.array,
	headerCloseHandler: PropTypes.func,
	isHeaderNoCloseBtn: PropTypes.bool,
	enableFooter: PropTypes.bool,
	footerBtns: PropTypes.array,
	isCancelClickOnOverlay: PropTypes.bool,
	show: PropTypes.bool,
	maxWidth: PropTypes.number,
};

export default Modal;
