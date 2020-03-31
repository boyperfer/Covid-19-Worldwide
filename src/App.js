import React from 'react';

import Map from './component/map/map.component';

import { AppContainer } from './App.style';
import { GlobalStyles } from './styles/global-style';

const App = () => {
	return (
		<AppContainer>
			<GlobalStyles />
			<Map />
		</AppContainer>
	);
};

export default App;
