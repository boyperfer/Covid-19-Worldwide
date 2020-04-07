import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleMyHome } from '../../redux/myhome/myhome.actions';

import {
	NavigationContainer,
	NavigationLogo,
	NavigationControl,
} from './navigation-button.styles';

const NavigationButton = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<NavigationContainer />
			<NavigationControl onClick={() => dispatch(toggleMyHome())}>
				<NavigationLogo />
			</NavigationControl>
		</div>
	);
};

export default NavigationButton;
