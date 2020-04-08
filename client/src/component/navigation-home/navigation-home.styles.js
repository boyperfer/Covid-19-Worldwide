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
				margin-left: 9rem;
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

export const LinkVietnamContainer = styled.div`
	font-size: 1.5rem;
	color: ${textWhite};
	padding: 0.4rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};

	&:hover,
	&:active {
		background-color: ${greyDark4};
	}

	@media ${mobile} {
		font-size: 2.4rem;
		padding: 0.4rem 2.5rem;
	}
`;

export const LinkUsContainer = styled.div`
	font-size: 1.5rem;
	color: ${textWhite};
	padding: 0.4rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};

	&:hover,
	&:active {
		background-color: ${greyDark4};
	}

	@media ${mobile} {
		font-size: 2.4rem;
		padding: 0.4rem 2.5rem;
	}
`;

export const LinkOthersContainer = styled.div`
	font-size: 1.5rem;
	color: ${textWhite};
	padding: 0.4rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};

	&:hover,
	&:active {
		background-color: ${greyDark4};
	}

	@media ${mobile} {
		font-size: 2.4rem;
		padding: 0.4rem 2.5rem;
	}
`;

export const LanguageContainer = styled.div`
	font-size: 2.5rem;
	color: ${textWhite};
	background-color: transparent;
	padding: 0.4rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};
	${getMargin}
`;

export const NavContainer = styled.div`
	display: flex;
	margin-left: 2rem;
	${getBackground}
`;
