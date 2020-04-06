import React from 'react';

import { useSelector } from 'react-redux';

import {
	selectDataObjectCorona,
	selectIsFetchingObject,
} from '../../redux/data/data.selectors';
import { selectHome } from '../../redux/myhome/myhome.selectors';

import { DateContainer, TitleContainer, TimeContainer } from './date.styles';

const Date = () => {
	const dataObject = useSelector(selectDataObjectCorona);
	const home = useSelector(selectHome);
	const isFetchingObject = useSelector(selectIsFetchingObject);
	const country = isFetchingObject ? {} : dataObject[home];
	const { lastUpdate } = country;
	return (
		<DateContainer>
			<TitleContainer>Ngày cuối cập nhật (M/D/YYYY)</TitleContainer>
			<TimeContainer>{lastUpdate}</TimeContainer>
		</DateContainer>
	);
};

export default Date;
