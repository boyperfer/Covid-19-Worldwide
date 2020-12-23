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

const getFontSize = ({ isMillion }) => {
	return isMillion ? css`
		font-size: 5rem;
	`: css`
		font-size: 7rem;
	`
} 


const getColorNumber = ({ recovered, confirmed, deaths }) => {
	console.log(recovered, confirmed, deaths)
	return recovered
		? css`
				color: ${tertiaryLight};
				${getFontSize}
		  `
		: deaths
		? css`
				color: ${greyDark3};
				${getFontSize}
		  `
		: confirmed
		? css`
				color: ${primary};
				${getFontSize}
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
				border-top: 1px solid ${greyDark1};
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	font-weight: 700;
	${getColorNumber}

	@media ${mobile} {
		font-size: 10rem;
	}
`;
