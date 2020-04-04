import React from 'react';
import { useSelector } from 'react-redux';

import {
	selectDataCorona,
	selectIsFetching,
} from '../../redux/data/data.selectors';

import { numberWithCommas } from '../../assets/utils/utils';

import {
	HomeContainer,
	NameContainer,
	NumberContainer,
	TableContainer,
	CountryContainer,
	WrapContainer,
	ImgContainer,
	NameCountryContainer,
} from './myhome.styles';

const MyHome = () => {
	const dataCorona = useSelector(selectDataCorona);
	const isFetching = useSelector(selectIsFetching);
	const countriesHarsh = dataCorona.reduce((map, obj) => {
		map[obj.name.replace(/\s+/g, '').toLowerCase()] = { ...obj };
		return map;
	}, {});
	const vietNam = countriesHarsh['vietnam'];
	const us = countriesHarsh['us'];
	return isFetching ? (
		<div />
	) : (
		<HomeContainer>
			<CountryContainer>
				<NameCountryContainer>{us.name}</NameCountryContainer>
				<ImgContainer
					src={`https://lipis.github.io/flag-icon-css/flags/4x3/${us.code}.svg`}
				/>
			</CountryContainer>
			<TableContainer>
				<WrapContainer one>
					<NameContainer> Ca Nhiễm </NameContainer>
					<NumberContainer confirmed>
						{' '}
						{numberWithCommas(us.confirmed)}{' '}
					</NumberContainer>
				</WrapContainer>
				<WrapContainer two>
					<NameContainer recovered> Ca Phục Hồi </NameContainer>
					<NumberContainer recovered>
						{' '}
						{numberWithCommas(vietNam.recovered)}{' '}
					</NumberContainer>
				</WrapContainer>
				<WrapContainer three last>
					<NameContainer deaths> Ca Tử Vong </NameContainer>
					<NumberContainer deaths>
						{' '}
						{numberWithCommas(vietNam.deaths)}{' '}
					</NumberContainer>
				</WrapContainer>
			</TableContainer>
		</HomeContainer>
	);
};

export default MyHome;
