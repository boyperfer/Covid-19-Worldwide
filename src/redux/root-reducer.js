import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import popupReducer from './popup/popup.reducer';
import navigationReducer from './navigation/navigation.reducer';

const rootReducer = combineReducers({
	data: dataReducer,
	popup: popupReducer,
	navigation: navigationReducer,
});

export default rootReducer;
