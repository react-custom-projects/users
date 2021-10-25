import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import {
	closeEditUserModal,
	editSelectedUserData,
} from '../../store/usersSlice/actions/UsersActions';
//selectors
import { getAppIsEditUserModal } from '../../store/usersSlice/selectors/UsersSelectors';
import { getIsEditUserFormValid } from '../../store/usersSlice/selectors/EditUserFormSelectors';
//components
import Modal from '../shared/modal/Modal';
//containers
import EditUserForm from '../../containers/editUserForm/EditUserForm';

const EditUserModal = () => {
	const dispatch = useDispatch(),
		isModalOpen = useSelector((state) => getAppIsEditUserModal({ state })),
		isFormValid = useSelector((state) => getIsEditUserFormValid({ state }));

	const closeModal = () => {
		dispatch(closeEditUserModal());
	};

	const editUserDataHandler = () => {
		dispatch(editSelectedUserData());
	};

	const footerButtons = [
		{
			click: editUserDataHandler,
			label: 'Edit',
			disabled: !isFormValid,
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
			isCancelClickOnOverlay
		>
			<EditUserForm />
		</Modal>
	);
};

export default EditUserModal;
