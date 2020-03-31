import countriesArray from '../../assets/countryflag.json';

export const countriesHarsh = countriesArray.reduce((map, obj) => {
	map[obj.Name.replace(/\s+/g, '').toLowerCase()] = obj.Code.toLowerCase();
	return map;
}, {});
