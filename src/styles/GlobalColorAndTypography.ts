import { createGlobalStyle } from "styled-components";

export const GlobalColorAndTypography = createGlobalStyle`
  :root{
    --color-brand-1: #AA66FF;
    --color-brand-2: #444DF5;
    --color-secundary: #6856F9;
    --color-blue-1: #93C3CD;
    --color-blue-2: #1F8DFF;
    --color-blue-3: #01308D;
    --color-white: #F1F3F5;
    --color-black: #212529;
    --color-gray: #D9D9D9;
    --color-sucess: #188A94;
    --color-warn: #D2B77A;
    --color-error: #E02D2D;
    --border-default: 8px;
  }

  .heading-1{
    font-size: 3rem;
    font-weight: 700;
  }

  .heading-2{
    font-size: 2.5rem;
    font-weight: 700;
  }

  .heading-3{
    font-size: 1.75rem;
    font-weight: 700;
  }

  .heading-4{
    font-size: 1.25rem;
    font-weight: 700;
  }

  .text-1{
    font-size: 1rem;
    font-weight: 400;
  }

  .text-2{
    font-size: 0.875rem;
    font-weight: 400;
  }

  .text-3{
    font-size: 0.75rem;
    font-weight: 400;
  }
`;
