import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        box-sizing: border-box;
        font-family: 'Ed Sans Neue', 'Helvetica Neue', Arial, sans-serif;
    }
`;
