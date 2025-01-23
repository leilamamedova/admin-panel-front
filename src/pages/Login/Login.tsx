import React from "react";

import AuthContainer from "components/containers/authContainer/AuthContainer";
import InputPlain from "components/inputs/InputPlain";
import { useLogin } from "pages/Login/hooks/useLogin";
import { useLoginStyles } from "pages/Login/styles";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();

  const { loginData, loading, onSubmit, setLoginData } = useLogin();

  return (
    <>
      <AuthContainer
        header='Login'
        Component={
          <>
            <InputPlain
              label='Username'
              onChange={(value) =>
                setLoginData({
                  ...loginData,
                  username: value,
                })
              }
              value={loginData.username}
              className={classes.textField}
            />
            <InputPlain
              type='password'
              label='Password'
              onChange={(value) =>
                setLoginData({
                  ...loginData,
                  password: value,
                })
              }
              value={loginData.password}
              className={classes.textField}
            />
          </>
        }
        buttonName='Log in'
        onClick={onSubmit}
        loading={loading}
        disabled={!loginData.username || !loginData.password}
      />
    </>
  );
};

export default Login;
