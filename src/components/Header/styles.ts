import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 5vw;
  min-height: 55px;
  background-color: #6856f9;
  position: fixed;
  top: 0;
  z-index: 1;

  // display
  display: flex;
  align-items: center;
  justify-content: space-between;

  // font
  color: white;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 15px;
    margin-right: 15px;
  }

  nav {
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }

  img {
    width: 75%;
    min-width: 210px;
  }

  button {
    background-color: Transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
  }

  span {
    visibility: hidden;
  }

  @media (max-height: 330px) {
    img {
      width: 50%;
    }
  }
`;
