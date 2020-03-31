import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import popupReducer from './popup/popup.reducer';

const rootReducer = combineReducers({
	data: dataReducer,
	popup: popupReducer
});

export default rootReducer;
