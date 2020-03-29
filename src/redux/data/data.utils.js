export const countryToggleNumber = (countries, countryToggle) => {
	const existingCountry = countries.find(
		country => country.name === countryToggle.name
	);
	console.log(countries);
	if (existingCountry) {
		return countries.map(country => {
			return country.name === countryToggle.name
				? { ...country, onToggleNumber: !country.onToggleNumber }
				: country;
		});
	}

	return [...countries, { ...countryToggle, onToggleNumber: false }];
};
