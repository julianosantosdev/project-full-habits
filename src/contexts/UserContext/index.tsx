import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IGetObjectUserProps,
  ILoginUser,
  IObjectUser,
  IRegisterUser,
  IUserContext,
  IUserProviderProps,
} from "./types";

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IRegisterUser | null>(null);

  const [sleep, setSleep] = useState<IObjectUser>([]);
  const [training, setTraining] = useState<IObjectUser>([]);
  const [study, setStudy] = useState<IObjectUser>([]);

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
      const token = response.data.accessToken;
      const id = response.data.user.id;
      localStorage.setItem("@TOKEN-HABBITS", token);
      localStorage.setItem("@ID-HABBITS", id);

      await getObjectUser({
        id: id,
        habbitName: "sleepTimes",
        setState: setSleep,
      });
      await getObjectUser({
        id: id,
        habbitName: "studyTimes",
        setState: setStudy,
      });
      await getObjectUser({
        id: id,
        habbitName: "trainingTimes",
        setState: setTraining,
      });

      toast.success("Login efetuado com sucesso");
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer login");
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN-HABBITS");
    localStorage.removeItem("@ID-HABBITS");
    navigate("/");
  };

  const autoLoginUser = async () => {
    const token = localStorage.getItem("@TOKEN-HABBITS");
    const idString = localStorage.getItem("@ID-HABBITS");
    const id = parseInt(idString as string);
    if (token) {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        await getObjectUser({
          id: id,
          habbitName: "sleepTimes",
          setState: setSleep,
        });
        await getObjectUser({
          id: id,
          habbitName: "studyTimes",
          setState: setStudy,
        });
        await getObjectUser({
          id: id,
          habbitName: "trainingTimes",
          setState: setTraining,
        });

        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getObjectUser = async ({
    id,
    habbitName,
    setState,
  }: IGetObjectUserProps) => {
    const token = localStorage.getItem("@TOKEN-HABBITS");
    try {
      const response = await api.get(`/users/${id}/${habbitName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setState(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser,
        logoutUser,
        getObjectUser,
        setSleep,
        setStudy,
        setTraining,
        sleep,
        study,
        training,
        autoLoginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
