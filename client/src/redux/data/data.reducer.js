import DataActionTypes from "./data.types";

const INITIAL_STATE = {
    dataCorona: [],
    dataObjectCorona: {},
    totalCases: 0,
    isFetching: true,
    isFetchingObject: true,
    errorMessage: undefined,
};

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                isFetchingObject: true,
            };
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFetchingObject: true,
                dataCorona: action.payload,
            };
        case DataActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                isFetchingObject: false,
                errorMessage: action.payload,
            };
        case DataActionTypes.CHANGE_TO_OBJECT_HARSH:
            return {
                ...state,
                isFetchingObject: false,
                dataObjectCorona: action.payload,
            };
        case DataActionTypes.SUM_GLOBAL_CASES:
            return {
                ...state,
                isFetchingObject: false,
                totalCases: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;
