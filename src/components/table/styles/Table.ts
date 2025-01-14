import { styled } from "@mui/material";

export const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 30,
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const AdditionalButtons = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: 10,
  },
  display: "flex",
}));
