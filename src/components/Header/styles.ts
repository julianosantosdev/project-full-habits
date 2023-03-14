import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  min-height: 100px;
  max-height: 100px;
  background-color: #6856f9;
  position: fixed;
  top: 0;
  z-index: 1;

  // display
  display: flex;
  align-items: center;
  justify-content: space-around;

  // font
  color: white;
  font-weight: bold;

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 15px;
    margin-right: 15px;
    height: 60px;
  }

  nav {
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }

  img {
    width: 75%;
    min-width: 190px;
  }

  button {
    background-color: Transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    margin-bottom: 10px;
  }

  span {
    visibility: hidden;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1120px) {
    height: 11vh;
  }

  @media (max-width: 1120px) {
    height: 11vh;
  }
`;
