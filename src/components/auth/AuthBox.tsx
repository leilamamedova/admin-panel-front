import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { allowedRoutes, routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import LoadingComponent from "components/loading/LoadingComponent";
import Pages from "navigation/Pages";
import Auth from "store/actions/AuthActions";
import { IReducers } from "store/reducers/interfaces/reducers";

export const logOut = (): void => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("refresh_token");
  // localStorage.removeItem("refresh_token_expiry_time");
  window.location.reload();
};

const AuthBox = (): React.ReactElement => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // const auth = new Auth(useDispatch());

  // const authState = useSelector((state: IReducers) => state.authReducer);

  // const redirectIfUserIsNotAuthentificated = (pathname: string): any => {
  //   if (
  //     authState.sessionStatus === sessionStatuses.inactive &&
  //     Object.values(allowedRoutes).indexOf(pathname) === -1
  //   )
  //     return navigate(allowedRoutes.login);

  //   return null;
  // };

  // const redirectIfUserIsAlreadyAuthentificated = (pathname: string): any => {
  //   if (
  //     authState.sessionStatus === sessionStatuses.active &&
  //     Object.values(allowedRoutes).indexOf(pathname) >= 0
  //   )
  //   return navigate(routes.users);

  //   return null;
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     auth.setSessionStatus(sessionStatuses.active);
  //   } else {
  //     auth.setSessionStatus(sessionStatuses.inactive);
  //   }
  // }, []);

  return (
    <div className='d-flex flex-grow-1'>
      {/* {redirectIfUserIsNotAuthentificated(location.pathname)}
      {redirectIfUserIsAlreadyAuthentificated(location.pathname)} */}
      {/* {authState.sessionStatus !== sessionStatuses.start ? (
        <Pages />
      ) : (
        <LoadingComponent />
      )} */}

      <Pages />
    </div>
  );
};

export default AuthBox;

AuthBox.displayName = "AuthBox";
