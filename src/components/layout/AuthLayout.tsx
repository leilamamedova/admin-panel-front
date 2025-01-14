import React from "react";

import { IAuthLayout } from "components/layout/interfaces";
import { useAuthLayoutStyles } from "components/layout/styles";

const AuthLayout = ({ children }: IAuthLayout): React.ReactElement => {
  const classes = useAuthLayoutStyles();

  return (
    <div className={classes.container}>
      <div className={classes.box}>{children}</div>
    </div>
  );
};

export default AuthLayout;

AuthLayout.displayName = "AuthLayout";
