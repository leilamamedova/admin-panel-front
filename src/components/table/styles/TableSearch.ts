import { styled, OutlinedInput } from "@mui/material";

export const Input = styled(OutlinedInput)(({ theme }) => ({
  width: 700,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
