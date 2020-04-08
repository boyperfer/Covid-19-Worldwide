import LanguageActionTypes from './language.types';

const INITIAL_STATE = {
	vietnamese: false,
};

const languageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LanguageActionTypes.CHANGE_LANGUAGE:
			return {
				...state,
				vietnamese: !state.vietnamese,
			};
		default:
			return state;
	}
};

export default languageReducer;
