import styled from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: { greyDark1, textWhite },
	device: { mobile },
} = mainStyle;

export const NavContainer = styled.div`
	display: flex;
	margin-left: 4rem;
`;

export const LinkContainer = styled.div`
	font-size: 1.5rem;
	color: ${textWhite};
	background-color: transparent;
	padding: 0.4rem 1.5rem;
	margin-right: 1rem;
	border: 1px solid ${greyDark1};
	border-bottom: 2px solid ${greyDark1};
	@media ${mobile} {
		font-size: 2.4rem;
		padding: 0.4rem 2.5rem;
	}
`;
