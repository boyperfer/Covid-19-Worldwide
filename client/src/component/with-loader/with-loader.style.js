import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icon/image2vector.svg';

import mainStyle from '../../styles/main';

const {
	variables: { primary, primaryDark, white, primaryLight, black },
	animations: { loadingCircle, loadingText },
} = mainStyle;

export const LoaderContainer = styled.div`
	width: 20rem;
	height: 20rem;
	border-radius: 50%;
	border-top: 10px solid #e74c3c;
	position: relative;
	animation: ${loadingCircle} 2s linear infinite;
	&::before,
	&::after {
		content: '';
		width: 20rem;
		height: 20rem;
		/* background-color: red; */
		position: absolute;
		left: 0;
		top: -1rem;
		border-radius: 50%;
	}

	&::before {
		border-top: 10px solid ${primaryDark};
		transform: rotate(120deg);
	}
	&::after {
		border-top: 10px solid ${primaryLight};
		transform: rotate(240deg);
	}
`;

export const WithLoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${white};
`;

export const LogoLoading = styled(Logo)`
	position: absolute;
	width: 20rem;
	height: 15rem;
	color: #fff;
	text-align: center;
	line-height: 20rem;
	animation: ${loadingText} 2s linear infinite;
`;
