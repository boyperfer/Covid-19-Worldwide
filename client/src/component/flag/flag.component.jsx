import React from 'react';

import { useSelector } from 'react-redux';

import {
	selectDataObjectCorona,
	selectIsFetchingObject,
} from '../../redux/data/data.selectors';
import { selectHome } from '../../redux/myhome/myhome.selectors';

import {
	CountryContainer,
	NameCountryContainer,
	ImgContainer,
} from './flag.styles';

const Flag = () => {
	const dataObject = useSelector(selectDataObjectCorona);
	const home = useSelector(selectHome);
	const isFetchingObject = useSelector(selectIsFetchingObject);
	const country = isFetchingObject ? {} : dataObject[home];
	const { name, code } = country;
	return (
		<CountryContainer>
			<NameCountryContainer>{name}</NameCountryContainer>
			<ImgContainer
				src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg`}
			/>
		</CountryContainer>
	);
};

export default Flag;
