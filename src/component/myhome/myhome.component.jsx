import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsFetching } from '../../redux/data/data.selectors';

import Detail from '../detail/detail.component';
import Flag from '../flag/flag.component';
import NavigationHome from '../navigation-home/navigation-home.component';
import Date from '../date/date.component';

import {
	HomeContainer,
	DetailContainer,
	FlagContainer,
	NavigationHomeContainer,
	DateContainer,
} from './myhome.styles';

const MyHome = () => {
	const isFetching = useSelector(selectIsFetching);
	return isFetching ? (
		<div />
	) : (
		<HomeContainer>
			<FlagContainer />
			<DetailContainer />
			<NavigationHomeContainer />
			<DateContainer />s
		</HomeContainer>
	);
};

export default MyHome;
