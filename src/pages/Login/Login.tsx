import React from "react";

import { Stack } from "@mui/material";

import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import InputPlain from "components/inputs/InputPlain";
import LoadingComponent from "components/loading/LoadingComponent";
import { useLogin } from "pages/Login/hooks/useLogin";
import { useLoginStyles } from "pages/Login/styles";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();

  const { loginData, loading, onSubmit, setLoginData } = useLogin();

  return (
    <>
      <h2>Login</h2>
      <Stack spacing={2}>
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

        <Button
          disabled={!loginData.username || !loginData.password}
          buttonType={buttonTypes.info}
          onClick={onSubmit}
          variant='contained'>
          Log in
        </Button>
      </Stack>

      {loading && <LoadingComponent />}
    </>
  );
};

export default Login;
