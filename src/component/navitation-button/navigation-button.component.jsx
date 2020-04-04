import React from 'react';

import {
	NavigationContainer,
	NavigationLogo,
	NavigationControl
} from './navigation-button.styles';

const NavigationButton = () => {
	return (
		<NavigationContainer>
			<NavigationControl>
				<NavigationLogo />
			</NavigationControl>
		</NavigationContainer>
	);
};

export default NavigationButton;
