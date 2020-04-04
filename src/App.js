import React from 'react';

import Map from './component/map/map.component';
import MyHome from './component/myhome/myhome.component';
import NavigationButton from './component/navitation-button/navigation-button.component';

import { AppContainer } from './App.style';
import { GlobalStyles } from './styles/global-style';

const App = () => {
	return (
		<AppContainer>
			<GlobalStyles />
			<Map />
			{/* <MyHome /> */}
			<NavigationButton />
		</AppContainer>
	);
};

export default App;
