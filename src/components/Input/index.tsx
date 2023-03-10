import { StyledInput } from "./styles";
import { IInput } from "../../contexts/ModalContext/types";

const Input = ({ type, placeholder, id }: IInput) => {
    return(
            <StyledInput
            type={type}
            placeholder={placeholder}
            id={id}
            /> 
    )
}

export { Input };