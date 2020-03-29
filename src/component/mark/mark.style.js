import styled, { css } from 'styled-components';
import { Layer } from 'react-mapbox-gl';

const getNumber = ({ onToggleNumber }) => {
	return onToggleNumber
		? css`
				visibility: hidden;
		  `
		: css`
				visibility: visible;
		  `;
};

export const NumberContainer = styled.div`
	font-size: 1rem;
	color: white;
	${getNumber}
`;

export const CircleContainer = styled(Layer)`
	height: 4rem;
	width: 4rem;
	border-radius: 10rem;
	background-color: red;
`;
