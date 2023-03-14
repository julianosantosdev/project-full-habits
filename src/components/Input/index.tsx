import { StyledInput } from "./styles";
import { IInput } from "../../contexts/ModalContext/types";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, placeholder, id, ...rest }, ref) => {
    return (
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        ref={ref}
        {...rest}
      />
    );
  }
);

export { Input };
