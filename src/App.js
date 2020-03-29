import React from 'react';

import Mark from './component/mark/mark.component';
import Map from './component/map/map.component';

import { AppContainer } from './App.style';
import { GlobalStyles } from './styles/global-style';

const App = () => {
	return (
		<AppContainer>
			<GlobalStyles />
			<Mark />
		</AppContainer>
	);
};

export default App;
