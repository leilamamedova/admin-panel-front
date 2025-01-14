import { ILogin } from "api/interfaces/auth";
import webConfig, { AuthServerUrl } from "api/webConfig";
import axios from "networking/axios";
import { ILoginData } from "pages/Login/interfaces";

// POST
export const login = (data: ILoginData): Promise<ILogin> =>
  axios
    .post(AuthServerUrl + webConfig.auth.login, data)
    .then((response) => response && response.data.result);
