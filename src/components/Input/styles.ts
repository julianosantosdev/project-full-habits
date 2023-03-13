import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    max-width: 100%;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid var(--color-brand-1);
    margin-top: 16px;
    
    input:invalid{
        border: 1px solid #E02D2D;
    }
`;

export { StyledInput };