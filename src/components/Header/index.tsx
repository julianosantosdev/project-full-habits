import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.png";

const Header = () => {
  // logica aqui

  return (
    <StyledHeader>
      <img src={Logo} alt="Habbits Logo" />
    </StyledHeader>
  );
};

export default Header;
