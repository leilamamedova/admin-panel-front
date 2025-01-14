import { useState } from "react";

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
    localStorage.setItem("token", "dummyJwtToken12345");
    localStorage.setItem("refresh_token", "dummyRefreshToken67890");
    localStorage.setItem("refresh_token_expiry_time", "2025-12-31T23:59:59Z");

    auth.setSessionStatus(sessionStatuses.active);
    navigate(routes.users);
    // setLoading(true);
    // await login(loginData)
    //   .then((response) => {
    //     if (response) {
    //       localStorage.setItem("token", response.jwtToken);
    //       localStorage.setItem("refresh_token", response.refreshToken);
    //       localStorage.setItem(
    //         "refresh_token_expiry_time",
    //         response.refreshTokenExpiryTime,
    //       );

    //       auth.setSessionStatus(sessionStatuses.active);
    //       navigate(routes.users);
    //     }
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return {
    loginData,
    loading,
    onSubmit,
    setLoginData,
  };
};

export default useLogin;

useLogin.displayName = "useLogin";
