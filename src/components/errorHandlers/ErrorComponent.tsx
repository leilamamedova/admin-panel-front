import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Icon,
  Container,
  Title,
  Button,
} from "components/errorHandlers/styles";

export const ErrorComponent = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <Container>
      <Icon />
      <Title>Something went wrong</Title>
      <Button
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}>
        Go to main page
      </Button>
      <Button
        onClick={() => {
          window.location.reload();
        }}>
        Refresh page
      </Button>
    </Container>
  );
};

ErrorComponent.displayName = "ErrorComponent";
