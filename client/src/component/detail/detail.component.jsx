import React from 'react';

import { useSelector } from 'react-redux';

import {
	selectDataObjectCorona,
	selectIsFetchingObject,
} from '../../redux/data/data.selectors';
import { selectHome } from '../../redux/myhome/myhome.selectors';

import { numberWithCommas } from '../../assets/utils/utils';

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
	const country = isFetchingObject ? {} : dataObject[home];
	const { confirmed, recovered, deaths } = country;
	return isFetchingObject ? (
		<div />
	) : (
		<TableContainer>
			<WrapContainer one>
				<NameContainer> Ca Nhiễm </NameContainer>
				<NumberContainer confirmed>
					{' '}
					{numberWithCommas(confirmed)}{' '}
				</NumberContainer>
			</WrapContainer>
			<WrapContainer two>
				<NameContainer recovered> Ca Phục Hồi </NameContainer>
				<NumberContainer recovered>
					{' '}
					{numberWithCommas(recovered)}{' '}
				</NumberContainer>
			</WrapContainer>
			<WrapContainer three last>
				<NameContainer deaths> Ca Tử Vong </NameContainer>
				<NumberContainer deaths>
					{' '}
					{numberWithCommas(deaths)}{' '}
				</NumberContainer>
			</WrapContainer>
		</TableContainer>
	);
};

export default Detail;
