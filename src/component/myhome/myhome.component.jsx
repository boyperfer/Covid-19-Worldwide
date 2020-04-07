import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsFetching } from '../../redux/data/data.selectors';
import {
	selectToggleHome,
	selectDisplayHome,
} from '../../redux/myhome/myhome.selectors';

import { mobileAndTabletcheck } from '../../assets/utils/utils';

import {
	HomeContainer,
	DetailContainer,
	FlagContainer,
	NavigationHomeContainer,
	DateContainer,
	OverallContainer,
} from './myhome.styles';

const MyHome = () => {
	const isFetching = useSelector(selectIsFetching);
	const isOnHome = useSelector(selectToggleHome);
	const displayHome = useSelector(selectDisplayHome);
	const mobile = mobileAndTabletcheck();
	return isFetching ? (
		<div />
	) : mobile ? (
		displayHome ? (
			<div>
				<OverallContainer>
					<HomeContainer isOnHome={isOnHome}>
						<FlagContainer />
						<DetailContainer />
						<NavigationHomeContainer />
						<DateContainer />
					</HomeContainer>
				</OverallContainer>
			</div>
		) : null
	) : (
		<HomeContainer>
			<FlagContainer />
			<DetailContainer />
			<NavigationHomeContainer />
			<DateContainer />
		</HomeContainer>
	);
};

export default MyHome;
