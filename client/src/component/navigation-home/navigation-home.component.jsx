import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeLanguage } from '../../redux/language/language.actions';
import {
	changeMyHome,
	toggleBackgroundHome,
} from '../../redux/myhome/myhome.actions';

import { selectVietnamese } from '../../redux/language/language.selectors';
import { selectToggleBackgroundHome } from '../../redux/myhome/myhome.selectors';

import {
	NavContainer,
	LinkVietnamContainer,
	LinkUsContainer,
	LanguageContainer,
	LinkOthersContainer,
} from './navigation-home.styles';

const NavigationHome = () => {
	const dispatch = useDispatch();
	const vietnamese = useSelector(selectVietnamese);
	const home = useSelector(selectToggleBackgroundHome);
	const vernaculer = vietnamese ? 'EN' : 'VN';
	return (
		<NavContainer home={home}>
			<LinkVietnamContainer
				onClick={() => {
					dispatch(changeMyHome('vietnam'));
					dispatch(toggleBackgroundHome('vietnam'));
				}}
			>
				VN
			</LinkVietnamContainer>
			<LinkUsContainer
				onClick={() => {
					dispatch(toggleBackgroundHome('us'));
					dispatch(changeMyHome('us'));
				}}
			>
				US
			</LinkUsContainer>
			<LinkOthersContainer
				onClick={() => dispatch(toggleBackgroundHome('others'))}
			>
				Others
			</LinkOthersContainer>

			<LanguageContainer onClick={() => dispatch(changeLanguage())}>
				{vernaculer}
			</LanguageContainer>
		</NavContainer>
	);
};

export default NavigationHome;
