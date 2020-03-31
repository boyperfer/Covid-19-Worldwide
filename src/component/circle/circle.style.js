import styled from 'styled-components';
import { Layer } from 'react-mapbox-gl';

export const CircleContainer = styled(Layer)`
	height: 4rem;
	width: 4rem;
	border-radius: 10rem;
	background-color: red;
	circle-radius: 10;
`;
