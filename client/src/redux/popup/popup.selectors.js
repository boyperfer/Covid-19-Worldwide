import { createSelector } from 'reselect';

const selectPopup = ({ popup }) => popup;

export const selectPopupCountries = createSelector(
	[selectPopup],
	({ popupCountries }) => popupCountries
);
