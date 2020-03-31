import PopupActionTypes from './popup.types';

export const popupToggle = country => ({
	type: PopupActionTypes.TOGGLE_POPUP,
	payload: country
});
