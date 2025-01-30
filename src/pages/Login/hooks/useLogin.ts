import { useState } from "react";

import Notification from "notifications/Notification";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "api/auth";
import { routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import { ILoginData, IUseLogin } from "pages/Login/interfaces";
import Auth from "store/actions/AuthActions";

export const useLogin = (): IUseLogin => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({
    username: "",
    password: "",
  });

  const auth = new Auth(useDispatch());

  const onSubmit = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await login(loginData);

      if (response) {
        localStorage.setItem("token", response.jwtToken);

        auth.setSessionStatus(sessionStatuses.active);
        navigate(routes.users);
      }
    } catch (error) {
      Notification.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loginData,
    loading,
    onSubmit,
    setLoginData,
  };
};
