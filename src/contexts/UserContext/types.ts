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
  date: string;
  hours: number;
  userId: number;
  id: number;
}

interface IGetObjectUserProps {
  id: number;
  habbitName: "sleepTimes" | "studyTimes" | "trainingTimes";
  setState: React.Dispatch<React.SetStateAction<IObjectUser | null>>;
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
  sleep: IObjectUser | null;
  setSleep: React.Dispatch<React.SetStateAction<IObjectUser | null>>;
  training: IObjectUser | null;
  setTraining: React.Dispatch<React.SetStateAction<IObjectUser | null>>;
  study: IObjectUser | null;
  setStudy: React.Dispatch<React.SetStateAction<IObjectUser | null>>;
}

export type {
  ILoginUser,
  IRegisterUser,
  IUserContext,
  IUserProviderProps,
  IObjectUser,
  IGetObjectUserProps,
};
