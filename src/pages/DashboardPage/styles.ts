import styled from "styled-components";

const DashBoardContent = styled.section`
  min-height: 100vh;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashboardContainer = styled.section`
  width: 85%;
  max-width: 1200px;
  min-height: 100%;
  margin-top: 17vh;
  //margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .charts {
    width: 100%;
  }

  .habbitsResume__content {
    // mexer aqui para mudar o tamanho do gráfico. Não colocar div em volta do componente.
    width: 85%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .habbitInfo {
    width: 100%;
    background-color: white;
    border-radius: var(--border-default);
    padding: 16px;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 15px;

    button {
      background-color: #444DF5c2;
      border-radius: var(--border-default);
      color: var(--color-white);
      transition: 300ms;
      padding: 8px;
      font-family: "Nunito";
      font-weight: 700;
      &:hover {
        background-color: var(--color-brand-2);
        transition: 300ms;
      }
    }
  }
`;
export { DashboardContainer, DashBoardContent };
