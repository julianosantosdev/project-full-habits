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
    }

    button {
      border: 1px solid red;
      margin: 20px;
    }

    .link-login {
      border: solid red 1px;
      text-align: center;
      margin: 20px;
    }
  }
`;
