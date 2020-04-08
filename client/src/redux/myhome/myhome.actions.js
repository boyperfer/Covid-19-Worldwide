import MyHomeActionTypes from './myhome.types';

export const changeMyHome = (home) => ({
	type: MyHomeActionTypes.CHANGE_MYHOME,
	payload: home,
});

export const toggleMyHome = () => ({
	type: MyHomeActionTypes.TOGGLE_MYHOME,
});

export const toggleBackgroundHome = (home) => ({
	type: MyHomeActionTypes.TOGGLE_BACKGROUND_HOME,
	payload: home,
});
