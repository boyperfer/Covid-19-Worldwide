import PopupActionTypes from './popup.types';

export const popupToggleHover = country => ({
	type: PopupActionTypes.TOGGLE_POPUP_HOVER,
	payload: country
});

export const popupToggleClick = country => ({
	type: PopupActionTypes.TOGGLE_POPUP_CLICK,
	payload: country
});
