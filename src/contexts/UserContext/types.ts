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

interface IObjectUser {
  length?: number;
  date: string;
  hours: number;
  userId: number;
  id: number;
}

interface IGetObjectUserProps {
  id: number;
  habbitName: "sleepTimes" | "studyTimes" | "trainingTimes";
  setState: React.Dispatch<React.SetStateAction<IObjectUser>>;
}

interface IUserContext {
  user: IRegisterUser | null;
  setUser: React.Dispatch<React.SetStateAction<IRegisterUser | null>>;
  registerUser: (data: IRegisterUser) => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
  logoutUser: () => void;

  getObjectUser: ({
    id,
    habbitName,
    setState,
  }: IGetObjectUserProps) => Promise<void>;
  sleep: IObjectUser;
  setSleep: React.Dispatch<React.SetStateAction<IObjectUser>>;
  training: IObjectUser;
  setTraining: React.Dispatch<React.SetStateAction<IObjectUser>>;
  study: IObjectUser;
  setStudy: React.Dispatch<React.SetStateAction<IObjectUser>>;
  autoLoginUser: () => Promise<void>;
}

export type {
  ILoginUser,
  IRegisterUser,
  IUserContext,
  IUserProviderProps,
  IObjectUser,
  IGetObjectUserProps,
};
