import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectOnNavigation } from '../../redux/navigation/navigation.selectors';
import { toggleNavigation } from '../../redux/navigation/navigation.actions';

import {
	NavigationContainer,
	NavigationLogo,
	NavigationControl,
} from './navigation-button.styles';

const NavigationButton = () => {
	const onNavigation = useSelector(selectOnNavigation);
	const dispatch = useDispatch();
	return (
		<NavigationContainer>
			<NavigationControl onClick={() => dispatch(toggleNavigation())}>
				<NavigationLogo on={onNavigation} />
			</NavigationControl>
		</NavigationContainer>
	);
};

export default NavigationButton;
