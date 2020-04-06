import MyHomeActionTypes from './myhome.types';

const INITIAL_STATE = {
	home: ['vietnam'],
};

const myHomeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MyHomeActionTypes.CHANGE_MYHOME:
			return {
				...state,
				home: [action.payload],
			};
		default:
			return state;
	}
};

export default myHomeReducer;
