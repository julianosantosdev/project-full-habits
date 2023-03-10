import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--color-white);
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  form {
    background-color: var(--color-gray);
    border-radius: var(--border-default);
    width: 100%;
    max-width: 750px;

    display: flex;
    flex-direction: column;

    h1 {
      align-self: center;
      color: var(--color-brand-1);
    }

    .form-container {
      display: flex;
      flex-direction: column;
      gap: 8px;

      padding: 20px 40px;
      p{
        color: #E02D2D;
      }
    }

    button{
      /* padding: 5px 20px 0 40px; */
      /* gap: 15px; */
    }

    .link-login {
        text-align: center;
        height: 48px;
        width: 100%;
        max-width: 668px;
        border-radius: 8px;
        border: none;
        margin-top: 19px;
        color: var(--color-white);
    }
  }
`;
