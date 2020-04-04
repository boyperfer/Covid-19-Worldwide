import NavigationActionTypes from './navigation.types';

const INITIAL_STATE = {
	onNavigation: false,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NavigationActionTypes.TOGGLE_NAVIGATION:
			return {
				...state,
				onNavigation: !state.onNavigation,
			};
		default:
			return state;
	}
};

export default navigationReducer;
