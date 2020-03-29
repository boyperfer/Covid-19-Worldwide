import ToggleActionTypes from './toggle-hidden.types';

const INITIAL_STATE = {
	onToggleNumber: false
};

const toggleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ToggleActionTypes.TOGGLE_NUMBER:
			return {
				...state,
				onToggleNumber: !state.onToggleNumber
			};
		default:
			return state;
	}
};

export default toggleReducer;
