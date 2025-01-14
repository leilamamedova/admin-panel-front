import React from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import { AuthContainerProps } from "components/containers/authContainer/interfaces";
import LoadingComponent from "components/loading/LoadingComponent";
import { useLoginStyles } from "pages/Login/styles";

const AuthContainer = ({
  header,
  Component,
  buttonName,
  loading,
  linkName,
  link,
  disabled,
  onClick,
}: AuthContainerProps): React.ReactElement => {
  const classes = useLoginStyles();

  return (
    <>
      <h2>{header}</h2>

      <Stack spacing={2}>
        {Component}

        <Button
          disabled={disabled}
          buttonType={buttonTypes.info}
          onClick={onClick}
          variant='contained'>
          {buttonName}
        </Button>
      </Stack>

      {link && (
        <Link to={link} className={classes.link}>
          <p>{linkName}</p>
        </Link>
      )}

      {loading && <LoadingComponent />}
    </>
  );
};

export default AuthContainer;

AuthContainer.displayName = "AuthContainer";
