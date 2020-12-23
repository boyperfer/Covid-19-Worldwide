import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';
import { NavigationContainer } from '../navitation-button/navigation-button.styles';

const {
	variables: { greyDark1, textWhite, greyDark4 },
	device: { mobile },
} = mainStyle;

const getMargin = ({ last }) => {
	return !last
		? css`
				margin-left: 4rem;
		  `
		: css`
				margin-left: 0;
		  `;
};

const getBackground = ({ home }) => {
	return home[0] === 'vietnam'
		? css`
				${LinkVietnamContainer} {
					background-color: ${greyDark4};
				}
		  `
		: home[0] === 'us'
		? css`
				${LinkUsContainer} {
					background-color: ${greyDark4};
				}
		  `
		: home[0] === 'others'
		? css`
				${LinkOthersContainer} {
					background-color: ${greyDark4};
				}
		  `
		: null;
};

const getContainerStyle = () => {
	return css`
		height: 3rem;
		font-size: 1.5rem;
		color: ${textWhite};
		padding: 0.5rem 1.5rem;
		margin-right: 1rem;
		border: 1px solid ${greyDark1};
		border-bottom: 2px solid ${greyDark1};
		text-align: center;

		@media ${mobile} {
			font-size: 2.4rem;
			padding: 0.4rem 2.5rem;
			height: 100%;
		}
	`
}

export const LinkVietnamContainer = styled.div`
	${getContainerStyle}
	&:hover,
	&:active {
		background-color: ${greyDark4};
	}
`;

export const LinkUsContainer = styled.div`
	${getContainerStyle}

	&:hover,
	&:active {
		background-color: ${greyDark4};
	}
`;

export const LinkOthersContainer = styled.div`
	${getContainerStyle}
	&:hover,
	&:active {
		background-color: ${greyDark4};
	}
`;

export const LanguageContainer = styled.div`
	height: 3rem;
	font-size: 2rem;
	text-align: center;
	color: ${textWhite};
	background-color: transparent;
	padding: 0rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};
	${getMargin};

	@media ${mobile} {
			height: 100%;
			margin-left: 9rem;
			font-size: 3rem;
		}
`;

export const NavContainer = styled.div`
	display: flex;
	margin-left: 2rem;
	${getBackground}
`;
