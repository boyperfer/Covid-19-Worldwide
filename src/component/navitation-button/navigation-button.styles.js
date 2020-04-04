import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: {
		primary,
		black,
		white,
		greyDark3,
		blueAnimation,
		tertiaryDark,
		tertiaryLight,
	},
	utils: { boxShadowCircle },
	device: { mobile, mobileS, bigScreen, mobileSLanscape, mobileLanscape },
} = mainStyle;

const getBackgroundTransform = ({ on }) => {
	return on
		? css`
				transform: scale(60);

				@media ${bigScreen} {
					transform: scale(75);
				}
		  `
		: null;
};

const getNav = ({ on }) => {
	return on
		? css`
				opacity: 1;
				width: 100vw;
		  `
		: null;
};

const getIcon = ({ on }) => {
	return on
		? css`
				& {
					background-color: transparent;
				}

				&::before {
					top: 0;
					transform: rotate(135deg);
				}

				&::after {
					top: 0;
					transform: rotate(-135deg);
				}
		  `
		: null;
};

const getLink = ({ on }) => {
	return on
		? css`
				visibility: visible;
		  `
		: css`
				visibility: hidden;
		  `;
};

const getItem = ({ one, two, three, four }) => {
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
		: four
		? css`
				grid-row: 4 / 5;
		  `
		: null;
};

export const NavigationContainer = styled.div`
	display: flex;
	position: relative;
	width: min-content;
	height: min-content;
`;

export const NavigationControl = styled.div`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: ${black};
    position: fixed;
    bottom: 6rem;
    right: 4rem;
    z-index: 2000;
    text-align: center;
    cursor: pointer;
    backface-visibility: hidden;

    ${boxShadowCircle}

    

    @media ${mobile}, ${mobileLanscape}, ${mobileS}  {
        height: 10rem;
        width: 10rem;
        bottom: 8rem;
        right: 4rem
    }


    @media ${mobileSLanscape}  {
        height: 10rem;
        width: 10rem;
    }
`;

export const NavigationBackground = styled.div`
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-image: radial-gradient(${tertiaryLight}, ${tertiaryDark});
    position: fixed;
    top: 6.5rem;
    left: 4.5rem;
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    backface-visibility: hidden;

    ${getBackgroundTransform}

    @media ${mobile}, ${mobileLanscape}, ${mobileSLanscape} {
        height: 9rem;
        width: 9rem;

        top: 8.5rem;
        left: 8.5rem
    }

    @media ${mobileS}, ${mobileSLanscape} {
        top: 8.5rem;
        left: 8.5rem;
    }
`;

export const NavigationLogo = styled.div`
	position: relative;
	margin-top: 3.5rem;
	backface-visibility: hidden;

	&,
	&::after,
	&::before {
		width: 3rem;
		height: 2px;
		background-color: ${primary};
		display: inline-block;
	}

	&::after,
	&::before {
		content: '';
		position: absolute;
		left: 0;
		transition: all 0.2s;
	}

	&::before {
		top: -0.8rem;
	}

	&::after {
		top: 0.9rem;
	}

	${getIcon};

	@media ${mobileSLanscape} {
		margin-top: 2.5rem;
		position: relative;

		&,
		&::after,
		&::before {
			width: 2rem;
			height: 2px;
			background-color: ${primary};
			display: inline-block;
		}

		&::after,
		&::before {
			content: '';
			position: absolute;
			left: 0;
			transition: all 0.2s;
		}

		&::before {
			top: -0.7rem;
		}

		&::after {
			top: 0.8rem;
		}

		${getIcon};
	}

	@media ${mobile}, ${mobileLanscape} {
		margin-top: 5rem;
		position: relative;

		&,
		&::after,
		&::before {
			width: 4.5rem;
			background-color: ${primary};
		}

		&::after,
		&::before {
			content: '';
			position: absolute;
			left: 0;
			transition: all 0.2s;
		}

		&::before {
			top: -1.2rem;
		}

		&::after {
			top: 1.3rem;
		}

		${getIcon};
	}
`;

export const NavigationNav = styled.nav`
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1500;
	opacity: 0;
	width: 0;

	${getNav}
	display: grid;
	justify-content: center;
	align-content: center;
	transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const NavigationList = styled.ul`
	padding: 0;
	list-style: none;
	height: 60vh;
	text-align: center;
	display: grid;
	grid-template-rows: repeat(4, minmax(7rem, 1fr));
	justify-items: center;
	align-items: center;

	@media ${mobileLanscape}, ${mobileSLanscape} {
		height: 80vh;
	}
`;

export const NavigationItems = styled.li`
	${getItem}
`;

export const NavigationLink = styled.button`
	font-size: 3rem;
	font-weight: 300;
	padding: 1rem 2rem;
	color: ${white};
	border: none;
	text-decoration: none;
	text-transform: uppercase;
	background-color: transparent;
	background-image: linear-gradient(
		120deg,
		transparent 0%,
		transparent 50%,
		${white} 50%
	);
	transition: all 0.3s;
	backface-visibility: hidden;
	${getLink}

	background-size: 220%;

	&:hover {
		background-position: 100%;
		color: ${blueAnimation};
	}

	@media ${mobile} {
		font-size: 4rem;
	}
`;
