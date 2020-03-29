import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import toggleReducer from './toggle-hidden/toggle-hidden.reducer';

const rootReducer = combineReducers({
	data: dataReducer,
	toggle: toggleReducer
});

export default rootReducer;
