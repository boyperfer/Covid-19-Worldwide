import styled from 'styled-components';

import Map from './component/map/map.component';
import MyHome from './component/myhome/myhome.component';

export const AppContainer = styled.div`
	backface-visibility: hidden;
	height: 100vh;
	display: grid;
	grid-template-columns: 25vw 75vw;
`;

export const MyHomeContainer = styled(MyHome)`
	grid-column: 1/2;
`;

export const MapContainer = styled(Map)`
	grid-column: 2/3;
`;
