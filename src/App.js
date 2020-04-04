import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchDataStartAsync } from './redux/data/data.actions';

import NavigationButton from './component/navitation-button/navigation-button.component';

import { AppContainer, MapContainer, MyHomeContainer } from './App.style';
import { GlobalStyles } from './styles/global-style';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDataStartAsync());
	}, [dispatch]);
	return (
		<AppContainer>
			<GlobalStyles />
			<MyHomeContainer />
			<MapContainer />
			{/* <NavigationButton /> */}
		</AppContainer>
	);
};

export default App;
