import React from 'react';

import { mobileAndTabletcheck } from './assets/utils/utils';
import NavigationButton from './component/navitation-button/navigation-button.component';

import { AppContainer, MapContainer, MyHomeContainer } from './App.style';
import { GlobalStyles } from './styles/global-style';

const App = () => {
	const mobile = mobileAndTabletcheck();
	return (
		<AppContainer>
			<GlobalStyles />
			<MyHomeContainer />
			<MapContainer />
			{mobile ? <NavigationButton /> : null}
		</AppContainer>
	);
};

export default App;
