import React from 'react';
import { useDispatch } from 'react-redux';

import { changeMyHome } from '../../redux/myhome/myhome.actions';

import { NavContainer, LinkContainer } from './navigation-home.styles';

const NavigationHome = () => {
	const dispatch = useDispatch();
	return (
		<NavContainer>
			<LinkContainer onClick={() => dispatch(changeMyHome('vietnam'))}>
				VN
			</LinkContainer>
			<LinkContainer onClick={() => dispatch(changeMyHome('us'))}>
				US
			</LinkContainer>
			<LinkContainer>Others</LinkContainer>
		</NavContainer>
	);
};

export default NavigationHome;
