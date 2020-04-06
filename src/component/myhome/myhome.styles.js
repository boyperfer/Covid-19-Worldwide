import styled from 'styled-components';

import mainStyle from '../../styles/main';

import Detail from '../detail/detail.component';
import Flag from '../flag/flag.component';
import NavigationHome from '../navigation-home/navigation-home.component';
import Date from '../date/date.component';

const {
	variables: { black },
	device: { mobile },
} = mainStyle;

export const HomeContainer = styled.div`
	height: 100vh;
	background-color: ${black};
	display: grid;
	grid-template-rows: max-content 1fr max-content min-content;
	grid-template-columns: 25vw;
	align-content: center;
	justify-content: center;
	@media ${mobile} {
		position: absolute;
		grid-template-columns: 90vw;
		height: 80vh;
		position: absolute;
		margin: auto 0;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 500;
	}
`;
export const FlagContainer = styled(Flag)`
	grid-row: 1/2;
`;

export const DetailContainer = styled(Detail)`
	grid-row: 2 / 3;
`;

export const NavigationHomeContainer = styled(NavigationHome)`
	grid-row: 3/4;
`;

export const DateContainer = styled(Date)`
	grid-row: 5/6;
`;
