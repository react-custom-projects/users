import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { hideEditUserModal } from '../../store/usersSlice/actions/UsersActions';
//selectors
import { getAppIsEditUserModal } from '../../store/usersSlice/selectors/UsersSelectors';
//components
import Modal from '../shared/modal/Modal';

const EditUserModal = () => {
	const dispatch = useDispatch(),
		isModalOpen = useSelector((state) => getAppIsEditUserModal({ state }));

	const closeModal = () => {
		dispatch(hideEditUserModal());
	};

	const editUserDataHandler = () => {
		console.log('Modal footer button was clicked');
	};

	const footerButtons = [
		{
			click: editUserDataHandler,
			label: 'Edit',
		},
		{
			click: closeModal,
			label: 'Cancel',
			color: 'red',
		},
	];
	return (
		<Modal
			show={isModalOpen}
			title="Edit user data"
			headerCloseHandler={closeModal}
			footerBtns={footerButtons}
		>
			edit user
		</Modal>
	);
};

export default EditUserModal;
