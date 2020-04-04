import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: {
		primary,
		greyDark4,
		textWhite,
		black,
		tertiaryLight,
		greyDark3,
		greyDark1,
	},
} = mainStyle;

const getName = ({ recovered, confirmed, deaths }) => {
	return recovered
		? css`
				color: ${tertiaryLight};
		  `
		: deaths
		? css`
				color: ${greyDark3};
		  `
		: css`
				color: ${textWhite};
		  `;
};

const getColorNumber = ({ recovered, confirmed, deaths }) => {
	return recovered
		? css`
				color: ${tertiaryLight};
		  `
		: deaths
		? css`
				color: ${greyDark3};
		  `
		: confirmed
		? css`
				color: ${primary};
				font-size: 7rem;
		  `
		: css`
				color: ${textWhite};
		  `;
};

const getMargin = ({ last }) => {
	return !last
		? css`
				margin: 1rem 0;
		  `
		: css`
				margin: 0;
		  `;
};

const getItem = ({ one, two, three }) => {
	return one
		? css`
				grid-row: 1 /2;
		  `
		: two
		? css`
				grid-row: 2 / 3;
		  `
		: three
		? css`
				grid-row: 3/ 4;
		  `
		: null;
};

export const HomeContainer = styled.div`
	width: 25vw;
	height: 100vh;
	background-color: ${black};
`;

export const TableContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	margin: 0 1rem 1rem 1rem;
	background-color: ${greyDark4};
	height: 75vh;
	align-items: stretch;
`;

export const CountryContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${greyDark4};
	margin: 0 1rem 1rem 1rem;
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

export const WrapContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 1rem 0;
	/* background-color: ${greyDark4}; */
	border-bottom: 1px solid ${greyDark1};
	/* ${getMargin} */
	${getItem}
`;

export const NameContainer = styled.p`
	background-color: ${greyDark4};
	font-weight: 500;
	font-size: 3rem;
	margin: 0;
	${getName}
	text-align: center;
`;

export const NumberContainer = styled.span`
	width: 100%;
	text-align: center;
	font-size: 6rem;
	font-weight: 700;

	${getColorNumber}
`;
