import PopupActionTypes from './popup.types';
import { clickCountry } from './popup.utils';

const INITIAL_STATE = {
	popupCountries: []
};

const popupReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PopupActionTypes.TOGGLE_POPUP_HOVER:
			return {
				...state,
				popupCountries: [action.payload]
			};
		case PopupActionTypes.TOGGLE_POPUP_CLICK:
			return {
				...state,
				popupCountries: clickCountry(
					state.popupCountries,
					action.payload
				)
			};
		default:
			return state;
	}
};

export default popupReducer;
