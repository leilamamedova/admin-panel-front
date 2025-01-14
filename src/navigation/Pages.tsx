import React, { Suspense } from "react";

import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { allowedRoutes, routes } from "assets/constants/routes";
import { sessionStatuses } from "assets/constants/sessionStatuses";
import AppLayout from "components/layout/AppLayout";
import AuthLayout from "components/layout/AuthLayout";
import LoadingComponent from "components/loading/LoadingComponent";
import { IReducers } from "store/reducers/interfaces/reducers";

const LoginPage = LazyImportPage("Login/Login");
const UsersPage = LazyImportPage("Users/Users");
const GamesPage = LazyImportPage("Games/Games");
const UserActivityPage = LazyImportPage("Reports/UserActivity/UserActivity");
const WinnerPage = LazyImportPage("Reports/Winner/Winner");

function LazyImportPage(
  route,
): React.LazyExoticComponent<React.ComponentType<any>> {
  return React.lazy(() => import(`pages/${route}`));
}

const Pages = (): React.ReactElement => {
  // const authState = useSelector((state: IReducers) => state.authReducer);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {/* {authState.sessionStatus === sessionStatuses.active && ( */}
      <AppLayout>
        <Routes>
          <Route path={routes.index} element={<Navigate to={routes.users} />} />
          <Route path={routes.users} element={<UsersPage />} />
          <Route path={routes.games} element={<GamesPage />} />
          <Route
            path={routes.reports.userActivity}
            element={<UserActivityPage />}
          />
          <Route path={routes.reports.winner} element={<WinnerPage />} />
        </Routes>
      </AppLayout>
      {/* )} */}
      {/* {authState.sessionStatus !== sessionStatuses.active && (
        <AuthLayout>
          <Routes>
            <Route path={allowedRoutes.login} element={<LoginPage />} />
          </Routes>
        </AuthLayout>
      )} */}
    </Suspense>
  );
};

export default Pages;
