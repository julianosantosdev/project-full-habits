import { ReactNode } from "react";

interface IUserProviderProps {
  children: ReactNode;
}

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IUserContext {
  user: IRegisterUser | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  registerUser: (data: IRegisterUser) => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
}

export type { ILoginUser, IRegisterUser, IUserContext, IUserProviderProps };
