import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
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
