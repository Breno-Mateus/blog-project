import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Blinker", sans-serif;
    }

    body{
        background-color: #0e1217;
        color: #fff;
    }
`