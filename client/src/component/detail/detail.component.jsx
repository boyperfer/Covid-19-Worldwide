import React from 'react';

import { useSelector } from 'react-redux';

import {
	selectDataObjectCorona,
	selectIsFetchingObject,
} from '../../redux/data/data.selectors';
import { selectHome } from '../../redux/myhome/myhome.selectors';
import { selectVietnamese } from '../../redux/language/language.selectors';

import { numberWithCommas, vernacular } from '../../assets/utils/utils';

import {
	WrapContainer,
	NameContainer,
	NumberContainer,
	TableContainer,
} from './detail.styles';

const Detail = () => {
	const dataObject = useSelector(selectDataObjectCorona);
	const home = useSelector(selectHome);
	const isFetchingObject = useSelector(selectIsFetchingObject);
	const isVietnamese = useSelector(selectVietnamese);
	const number = isFetchingObject ? {} : dataObject[home];
	const title = isVietnamese ? vernacular['VN'] : vernacular['ENG'];
	const { confirmedW, recoveredW, deathsW } = title;
	const { confirmed, recovered, deaths } = number;
	return isFetchingObject ? (
		<div />
	) : (
		<TableContainer>
			<WrapContainer one>
				<NameContainer> {confirmedW} </NameContainer>
				<NumberContainer confirmed>
					{' '}
					{numberWithCommas(confirmed)}{' '}
				</NumberContainer>
			</WrapContainer>
			<WrapContainer two>
				<NameContainer recovered> {recoveredW} </NameContainer>
				<NumberContainer recovered>
					{' '}
					{numberWithCommas(recovered)}{' '}
				</NumberContainer>
			</WrapContainer>
			<WrapContainer three last>
				<NameContainer deaths> {deathsW} </NameContainer>
				<NumberContainer deaths>
					{' '}
					{numberWithCommas(deaths)}{' '}
				</NumberContainer>
			</WrapContainer>
		</TableContainer>
	);
};

export default Detail;
