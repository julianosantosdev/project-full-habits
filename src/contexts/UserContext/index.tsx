import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  ILoginUser,
  IRegisterUser,
  IUserContext,
  IUserProviderProps,
} from "./types";

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const registerUser = async (data: IRegisterUser) => {
    try {
      const response = await api.post("/register", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar usuário");
    }
  };

  const loginUser = async (data: ILoginUser) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login efetuado com sucesso");
      navigate("/teste");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer login");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
