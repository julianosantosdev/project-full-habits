import { HeaderStyled } from "./styles";
import logo from "../../assets/LogoHabbits.png";
import hamburguer from "../../assets/Hamburguer.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface IHeaderInterface {
  showButtons: string | null;
}

const Header = ({ showButtons }: IHeaderInterface) => {
  const { logoutUser } = useContext(UserContext);
  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <HeaderStyled>
      <nav>
        {showButtons && (
          <span>
            <p>ninja</p>
          </span>
        )}
      </nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="button-container">
        {showButtons && (
          <button
            onClick={() => {
              handleLogOut();
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </HeaderStyled>
  );
};

export { Header };
