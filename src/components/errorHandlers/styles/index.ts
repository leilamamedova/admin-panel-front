import { styled } from "@mui/material";

import { colors } from "assets/constants/colors";
import { ErrorIcon } from "assets/icons";

export const Container = styled("div")({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
});

export const Icon = styled(ErrorIcon)({
  fontSize: 40,
  color: colors.red[700],
});

export const Title = styled("h1")({
  marginTop: 0,
  marginBottom: 40,
});

export const Button = styled("div")({
  width: 100,
  cursor: "pointer",
  borderRadius: 5,
  fontWeight: 500,
  padding: 7,
  backgroundColor: colors.white[500],
  color: colors.blue[500],
  textAlign: "center",
  display: "inline",
  marginRight: 10,
});
