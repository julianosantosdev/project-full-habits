import { createGlobalStyle } from "styled-components";

export const GlobalColorAndTypography = createGlobalStyle`
  :root{
    --color-brand-1: #AA66FF;
    --color-brand-2: #444DF5;
    --color-secundary: #6856F9;
    --color-blue-1: #93C3CD;
    --color-blue-2: #1F8DFF;
    --color-blue-3: #01308D;
    --color-white: #FFFFFF;
    --color-black: #212529;
    --color-sucess: #188A94;
    --color-warn: #D2B77A;
    --color-error: #E02D2D;
  }

  .heading-1{
    font-size: 4.8rem;
    font-weight: 700;
  }

  .heading-2{
    font-size: 4.0rem;
    font-weight: 700;
  }

  .heading-3{
    font-size: 2.8rem;
    font-weight: 700;
  }

  .heading-4{
    font-size: 2.0rem;
    font-weight: 700;
  }

  .text-1{
    font-size: 1.6rem;
    font-weight: 400;
  }

  .text-2{
    font-size: 1.4rem;
    font-weight: 400;
  }

  .text-3{
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
