import MyHomeActionTypes from './myhome.types';

export const changeMyHome = (home) => ({
	type: MyHomeActionTypes.CHANGE_MYHOME,
	payload: home,
});
