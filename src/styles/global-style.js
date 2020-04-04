import { createGlobalStyle } from 'styled-components';

import mainStyle from './main';
const {
	device: { mobile, mobileS, mobileSLanscape, mobileLanscape }
	// variables: { white, black }
} = mainStyle;

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;

        @media ${mobile} {
            font-size: 6px;
        }

        @media ${mobileS} {
            font-size: 5px;
        }

        @media ${mobileLanscape} {
            font-size: 5px;
        }

        @media ${mobileSLanscape} {
            font-size: 4px;
        }
   }

    body {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 1.8;
        height: 100vh;
    }

    

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }
`;
