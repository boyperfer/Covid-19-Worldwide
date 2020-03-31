import DataActionTypes from './data.types';

const INITIAL_STATE = {
	dataCorona: [],
	isFetching: true,
	errorMessage: undefined
};

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DataActionTypes.FETCH_DATA_START:
			return {
				...state,
				isFetching: true
			};
		case DataActionTypes.FETCH_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataCorona: action.payload
			};
		case DataActionTypes.FETCH_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default dataReducer;
