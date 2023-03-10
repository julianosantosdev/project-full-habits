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
    border-radius: var(--border-default);
    background-color: var(--color-gray);
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

    .register-container {
      width: 100%;
      padding: 5px 20px;
      margin-bottom: 20px;

      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        text-align: center;
      }

      .link-register {
        border: 1px solid;
        text-align: center;
      }
    }
  }
`;
