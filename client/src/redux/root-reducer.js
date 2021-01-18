import { combineReducers } from "redux";

import dataReducer from "./data/data.reducer";
import popupReducer from "./popup/popup.reducer";
import navigationReducer from "./navigation/navigation.reducer";
import myHomeReducer from "./myhome/myhome.reducer";
import languageReducer from "./language/language.reducer";

const rootReducer = combineReducers({
    language: languageReducer,
    data: dataReducer,
    popup: popupReducer,
    navigation: navigationReducer,
    myHome: myHomeReducer,
});

export default rootReducer;
