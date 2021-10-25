export const getEditUserFormName = ({ state }) => state.editUser.name;

export const getEditUserFormEmail = ({ state }) => state.editUser.email;

export const getEditUserFormCity = ({ state }) => state.editUser.city;

export const getEditUserFormPhone = ({ state }) => state.editUser.phone;

export const getEditUserFormWebsite = ({ state }) => state.editUser.website;

export const getEditUserFormCompanyName = ({ state }) => state.editUser.companyName;

export const getIsEditUserFormValid = ({ state }) => {
	const name = getEditUserFormName({ state }).valid,
		email = getEditUserFormEmail({ state }).valid,
		city = getEditUserFormCity({ state }).valid,
		phone = getEditUserFormPhone({ state }).valid,
		website = getEditUserFormWebsite({ state }).valid,
		companyName = getEditUserFormCompanyName({ state }).valid;

	return name && email && city && phone && website && companyName;
};
