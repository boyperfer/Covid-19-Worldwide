import styled, { css } from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: { primary, black },
	utils: { boxShadowCircle },
	device: { mobile, mobileS, mobileSLanscape, mobileLanscape },
} = mainStyle;

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
