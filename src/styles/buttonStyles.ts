import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    max-width: 668px;
    height: 48px;
    border-radius: 8px;
    border: none;
    margin-top: 19px;

    font-size: 28px;
    font-family: 'Nunito', sans-serif;
    color: var(--color-white);
    background-color: #AA66FF;

    :hover {
        background-color: #dcbfff;
    }
`;

export { StyledButton };