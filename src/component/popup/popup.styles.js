import styled from 'styled-components';

import { Popup } from 'react-mapbox-gl';

export const PopupContainer = styled(Popup)`
	display: flex;
`;

export const NameContainer = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	padding: 0.5rem;
	margin: 0.5rem 1rem;
	display: flex;
`;

export const NumberContainer = styled.div`
	font-size: 1.5rem;
	padding: 0.5rem;
	margin: 0.5rem 1rem;
`;

export const CountryContainer = styled.img`
	width: 2rem;
	height: 2rem;
	margin: 0 1rem;
`;
