import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 15%;
  background-color: #6856f9;
  position: fixed;
  top: 0;
  margin-bottom: 150vh;

  // display
  display: flex;
  align-items: center;
  justify-content: space-between;

  // font
  color: white;
  font-weight: bold;

  div {
    margin-left: 15px;
    margin-right: 15px;
  }

  nav {
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  button {
    background-color: Transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
  }

  @media (max-height: 330px) {
    img {
      width: 70%;
    }
  }
`;
