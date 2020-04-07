import MyHomeActionTypes from './myhome.types';

export const changeMyHome = (home) => ({
	type: MyHomeActionTypes.CHANGE_MYHOME,
	payload: home,
});

export const toggleMyHome = () => ({
	type: MyHomeActionTypes.TOGGLE_MYHOME,
});
