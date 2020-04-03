import countriesArray from '../../assets/data/countryflag.json';

export const countriesHarsh = countriesArray.reduce((map, obj) => {
	map[obj.Name.replace(/\s+/g, '').toLowerCase()] = obj.Code.toLowerCase();
	return map;
}, {});
