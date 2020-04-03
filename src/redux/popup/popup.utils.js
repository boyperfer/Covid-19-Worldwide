import { mobileAndTabletcheck } from '../../assets/utils/utils';

export const clickCountry = (poppedCountry, countryToAdd) => {
	const checkMobileTablet = mobileAndTabletcheck();
	const checkCountryEmpty = poppedCountry => {
		const getTrue =
			poppedCountry === undefined || poppedCountry.length === 0;
		return getTrue;
	};

	if (checkCountryEmpty(poppedCountry)) {
		return [countryToAdd];
	} else {
		if (checkMobileTablet) {
			return poppedCountry[0].name === countryToAdd.name
				? []
				: [countryToAdd];
		}
	}

	return [];
};
