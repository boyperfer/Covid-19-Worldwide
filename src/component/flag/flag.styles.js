import styled from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: { greyDark4, textWhite },
} = mainStyle;

export const CountryContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${greyDark4};
	margin: 1rem 1rem 1rem 1rem;
`;

export const NameCountryContainer = styled.h1`
	font-size: 5rem;
	color: ${textWhite};
	margin: 0;
	padding: 0 1rem;
`;

export const ImgContainer = styled.img`
	width: 6rem;
	height: 6rem;
`;
