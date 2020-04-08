import styled from 'styled-components';

import MapPage from './component/map-page/map-page.component';
import MyHome from './component/myhome/myhome.component';
import mainStyle from './styles/main';

const {
	device: { mobile },
} = mainStyle;

export const AppContainer = styled.div`
	backface-visibility: hidden;
	height: 100vh;
	display: grid;
	grid-template-columns: 25vw 75vw;

	align-content: center;

	@media ${mobile} {
		display: flex;
		justify-content: center;
	}
`;

export const MyHomeContainer = styled(MyHome)`
	grid-column: 1/2;

	@media ${mobile} {
		grid-column: unset;
	}
`;

export const MapContainer = styled(MapPage)`
	grid-column: 2/3;

	@media ${mobile} {
		grid-column: unset;
	}
`;
