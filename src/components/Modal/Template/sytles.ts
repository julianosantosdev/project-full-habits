import styled from "styled-components";

const ModalContainer = styled.section`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  .modalBody {
    max-width: 23rem;
    max-height: 23rem;
    min-height: 16rem;
    width: 90%;
    background-color: var(--color-gray);
    border-radius: var(--border-default);
  }

  .modalHeader {
    height: 3rem;
    background-color: var(--color-secundary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
    border-radius: 8px 8px 0 0;
    padding: 0 16px;

    button {
      background-color: transparent;
      border: none;
      color: var(--color-white);
      font-size: 16px;
    }
  }

  form {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export { ModalContainer };

