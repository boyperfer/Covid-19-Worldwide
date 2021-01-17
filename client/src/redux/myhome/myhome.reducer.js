import MyHomeActionTypes from "./myhome.types";

const INITIAL_STATE = {
    home: ["vietnam"],
    filter: [],
    country: [],
    toggleBackgroundHome: ["vietnam"],
    displayHome: false,
    toggleHome: false,
};

const myHomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MyHomeActionTypes.CHANGE_MYHOME:
            return {
                ...state,
                home: [action.payload],
            };
        case MyHomeActionTypes.FILTER_COUNTRIES:
            return {
                ...state,
                filter: [action.payload],
            };
        case MyHomeActionTypes.TOGGLE_BACKGROUND_HOME:
            return {
                ...state,
                toggleBackgroundHome: [action.payload],
            };
        case MyHomeActionTypes.TOGGLE_MYHOME:
            return {
                ...state,
                displayHome: true,
                toggleHome: !state.toggleHome,
            };
        case MyHomeActionTypes.CHANGE_COUNTRY:
            return {
                ...state,
                country: [action.payload],
            };
        default:
            return state;
    }
};

export default myHomeReducer;
