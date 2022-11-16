import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: IBM Plex Sans, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    li, a {
        list-style: none;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
