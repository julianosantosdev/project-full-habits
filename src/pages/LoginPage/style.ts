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
    position: absolute;
    top: 12vh;
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
      p {
        color: #e02d2d;
      }
    }
    .register-container {
      display: flex;
      flex-direction: column;

      max-width: 100%;
      padding: 5px 20px 0 40px;
      gap: 15px;
      margin-bottom: 20px;

      p {
        text-align: center;
      }

      .link-register {
        text-align: center;
        width: 100%;
        max-width: 668px;
        height: 48px;
        border-radius: 8px;
        border: none;
        margin-top: 19px;

        font-size: 28px;
        font-family: "Nunito", sans-serif;
        color: var(--color-white);
        background-color: #aa66ff;

        :hover {
          background-color: #dcbfff;
        }
      }
    }
  }
  /* @media (max-width: 480px) {
    form {
      margin-top: 20%;
    }
  }

  @media (max-height: 440px) {
    form {
      margin-top: 15%;
    }
  } */
`;
