export const clickCountry = (poppedCountry, countryToAdd) => {
	const checkCountryEmpty = poppedCountry => {
		const getTrue =
			poppedCountry === undefined || poppedCountry.length === 0;
		return getTrue;
	};

	if (checkCountryEmpty(poppedCountry)) {
		return [countryToAdd];
	}

	return [];
};
