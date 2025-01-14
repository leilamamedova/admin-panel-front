import { Dispatch, SetStateAction } from "react";

export interface ILoginData {
  username: string;
  password: string;
}

export interface IUseLogin {
  loginData: ILoginData;
  loading: boolean;
  onSubmit: () => void;
  setLoginData: Dispatch<SetStateAction<ILoginData>>;
}
