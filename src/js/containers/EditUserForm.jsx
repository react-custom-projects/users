import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import {
	setEditUserFormCityProperties,
	setEditUserFormCompanyNameProperties,
	setEditUserFormEmailProperties,
	setEditUserFormNameProperties,
	setEditUserFormPhoneProperties,
	setEditUserFormWebsiteProperties,
} from '../store/usersSlice/actions/EditUserFormActions';
//selectors
import {
	getEditUserFormCity,
	getEditUserFormCompanyName,
	getEditUserFormEmail,
	getEditUserFormName,
	getEditUserFormPhone,
	getEditUserFormWebsite,
} from '../store/usersSlice/selectors/EditUserFormSelectors';
//constants
import { editUserFormConfig } from '../constants/formsConfig/EditUserFormConfig';
//components
import Input from '../components/shared/input/Input';

const EditUserForm = () => {
	const dispatch = useDispatch(),
		name = useSelector((state) => getEditUserFormName({ state })),
		email = useSelector((state) => getEditUserFormEmail({ state })),
		city = useSelector((state) => getEditUserFormCity({ state })),
		phone = useSelector((state) => getEditUserFormPhone({ state })),
		website = useSelector((state) => getEditUserFormWebsite({ state })),
		companyName = useSelector((state) => getEditUserFormCompanyName({ state })),
		{
			nameConfig,
			emailConfig,
			cityConfig,
			phoneConfig,
			websiteConfig,
			companyNameConfig,
		} = editUserFormConfig;

	const nameHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormNameProperties(value));
	};

	const emailHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormEmailProperties(value));
	};

	const cityHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormCityProperties(value));
	};

	const phoneHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormPhoneProperties(value));
	};

	const websiteHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormWebsiteProperties(value));
	};

	const companyNameHandler = ({ target: { value } }) => {
		dispatch(setEditUserFormCompanyNameProperties(value));
	};

	return (
		<div>
			<Input
				elementType={nameConfig.elementType}
				elementConfig={nameConfig.elementConfig}
				value={name.value}
				changed={nameHandler}
				invalid={!name.valid}
				touched={name.touched}
				label={nameConfig.label}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: name.displayErrors.isRequiredError,
					},
					{
						key: 'isCharError',
						value: name.displayErrors.isCharError,
					},
				]}
				required
				outlined
			/>
			<Input
				elementType={emailConfig.elementType}
				elementConfig={emailConfig.elementConfig}
				value={email.value}
				changed={emailHandler}
				invalid={!email.valid}
				touched={email.touched}
				label={emailConfig.label}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: email.displayErrors.isRequiredError,
					},
					{
						key: 'isEmailError',
						value: email.displayErrors.isEmailError,
					},
				]}
				required
				outlined
			/>
			<Input
				elementType={cityConfig.elementType}
				elementConfig={cityConfig.elementConfig}
				value={city.value}
				changed={cityHandler}
				invalid={!city.valid}
				touched={city.touched}
				label={cityConfig.label}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: city.displayErrors.isRequiredError,
					},
					{
						key: 'isCharError',
						value: city.displayErrors.isCharError,
					},
				]}
				required
				outlined
			/>
			<Input
				elementType={phoneConfig.elementType}
				elementConfig={phoneConfig.elementConfig}
				label={phoneConfig.label}
				value={phone.value}
				changed={phoneHandler}
				invalid={!phone.valid}
				touched={phone.touched}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: phone.displayErrors.isRequiredError,
					},
					{
						key: 'isMinLengthError',
						value: phone.displayErrors.isMinLengthError,
						args: { num: 9, type: 'numbers' },
					},
				]}
				required
				outlined
			/>
			<Input
				elementType={websiteConfig.elementType}
				elementConfig={websiteConfig.elementConfig}
				value={website.value}
				changed={websiteHandler}
				invalid={!website.valid}
				touched={website.touched}
				label={websiteConfig.label}
				icon={websiteConfig.icon}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: website.displayErrors.isRequiredError,
					},
					{
						key: 'isLinkError',
						value: website.displayErrors.isLinkError,
					},
				]}
				outlined
			/>
			<Input
				elementType={companyNameConfig.elementType}
				elementConfig={companyNameConfig.elementConfig}
				value={companyName.value}
				changed={companyNameHandler}
				invalid={!companyName.valid}
				touched={companyName.touched}
				label={companyNameConfig.label}
				errorsArray={[
					{
						key: 'isRequiredError',
						value: companyName.displayErrors.isRequiredError,
					},
					{
						key: 'isCharError',
						value: companyName.displayErrors.isCharError,
					},
				]}
				required
				outlined
			/>
		</div>
	);
};

export default EditUserForm;
