import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: {
		primary,
		greyDark4,
		textWhite,
		tertiaryLight,
		greyDark3,
		greyDark1,
	},
	device: { mobile },
} = mainStyle;

const getName = ({ recovered, deaths }) => {
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
				font-size: 8rem;
				@media ${mobile} {
					font-size: 12rem;
				}
		  `
		: css`
				color: ${textWhite};
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

export const TableContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	margin: 0 1rem;
	background-color: ${greyDark4};
	/* height: 100%; */
	align-items: stretch;
`;

export const WrapContainer = styled.div`
	text-align: center;
	padding: 1rem 0;
	border-bottom: 1px solid ${greyDark1};
	${getItem}
`;

export const NameContainer = styled.p`
	background-color: ${greyDark4};
	font-weight: 500;
	font-size: 3rem;
	margin: 0;
	text-align: center;
	${getName}

	@media ${mobile} {
		font-size: 5rem;
	}
`;

export const NumberContainer = styled.span`
	text-align: center;
	font-size: 6rem;
	font-weight: 700;

	@media ${mobile} {
		font-size: 8rem;
	}
	${getColorNumber}
`;
