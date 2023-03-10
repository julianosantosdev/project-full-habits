import { HeaderStyled } from "./styles";
import logo from "../../assets/LogoHabbits.png";
import hamburguer from "../../assets/Hamburguer.png";

interface IHeaderInterface {
  showButtons: string | null;
}

const Header = ({ showButtons }: IHeaderInterface) => {
  return (
    <HeaderStyled>
      <nav>{showButtons && <img src={hamburguer} alt="logo" />}</nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>{showButtons && <button>LogOut</button>}</div>
    </HeaderStyled>
  );
};

export { Header };
