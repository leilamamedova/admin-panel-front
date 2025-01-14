import { styled } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";

export const useAuthLayoutStyles = makeStyles(() =>
  createStyles({
    container: {
      background: colors.blue[900],
      height: "100vh",
      textAlign: "center",
    },
    box: {
      textAlign: "center",
      background: colors.white[900],
      boxShadow: "0px 7px 23px rgba(0, 0, 0, 0.05)",
      borderRadius: "6px",
      padding: "50px",
      position: "absolute",
      top: "25%",
      left: "50%",
      transform: "translateX(-50%)",
      "& .ant-btn-link": {
        position: "absolute",
        top: "10px",
        left: "15px",
      },
      "& form": {
        width: "350px",
        "& .ant-input-group-addon": {
          background: "transparent",
          borderRadius: "6px 0 0 6px",
          border: `1px solid ${colors.blue[400]}`,
          borderRight: "0",
          "& .ant-select-selector": {
            color: colors.blue[400],
          },
        },
        "& input": {
          height: "50px",
          border: `1px solid ${colors.blue[400]}`,
          borderRadius: "16px",
          "&::placeholder": {
            color: "grey",
          },
          "&:focus": {
            borderColor: `${colors.blue[400]} !important`,
          },
          '&[placeholder="Mobile number"]': {
            borderLeft: "0 !important",
          },
        },
        "& .ant-input-wrapper.ant-input-group:hover": {
          "& .ant-input-group-addon, & input": {
            borderColor: `${colors.blue[400]} !important`,
          },
        },
        '& button[type="submit"]': {
          width: "100%",
          fontSize: "12px !important",
          marginBottom: "0 !important",
          backgroundColor: colors.blue[400],
          color: "white",
          padding: "15px",
          height: "auto",
          borderRadius: "10px",
        },
        "& .ant-space": {
          textAlign: "left",
        },
      },
    },
    typography: {
      color: colors.blue[100],
      display: "block",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    notFoundPage: {
      "& h1": {
        fontSize: "150px",
        marginBottom: "0.1em",
      },
      "& span": {
        fontSize: "20px",
      },
    },
  }),
);

export const ContentHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
