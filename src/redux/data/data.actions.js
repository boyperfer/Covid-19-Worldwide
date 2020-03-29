import DataActionTypes from './data.types';

export const fetchDataStart = () => ({
	type: DataActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = data => ({
	type: DataActionTypes.FETCH_DATA_SUCCESS,
	payload: data
});

export const fetchDataFailure = err => ({
	type: DataActionTypes.FETCH_DATA_FAILURE,
	payload: err
});

export const toggleNumber = country => ({
	type: DataActionTypes.TOGGLE_NUMBER,
	payload: country
});

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchDataStartAsync = () => {
	return async dispatch => {
		try {
			await dispatch(fetchDataStart());
			const countries = await fetch(
				'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true'
			);
			const countriesData = await countries.json();
			const formattedData = await countriesData.features.map(
				f => f.attributes
			);
			const data = await formattedData.map(f => ({
				name: f.Country_Region,
				coordinates: [f.Lat, f.Long_],
				confirmed: f.Confirmed,
				deaths: f.Deaths,
				recovered: f.Recovered,
				onToggleNumber: false
			}));
			await sleep(100);
			dispatch(fetchDataSuccess(data));
		} catch (err) {
			dispatch(fetchDataFailure(err));
		}
	};
};
