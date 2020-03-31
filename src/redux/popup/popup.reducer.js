import PopupActionTypes from './popup.types';

const INITIAL_STATE = {
	popupCountries: []
};

const popupReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PopupActionTypes.TOGGLE_POPUP:
			return {
				...state,
				popupCountries: [action.payload]
			};
		default:
			return state;
	}
};

export default popupReducer;
