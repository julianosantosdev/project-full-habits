import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    
    /* font-size: 62.5%; */
    font-family: 'Inter', sans-serif;
    line-height: 150%;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
`;
