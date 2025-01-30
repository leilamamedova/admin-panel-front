import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";

export const useTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      overflow: "hidden",
      "& .MuiTablePagination-actions": {
        display: "none",
      },
      "& .MuiTablePagination-root": {
        marginRight: 30,
      },
    },
    paginationContainer: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
    export: {
      margin: " 0 10px 0 5px !important",
    },
  }),
);

export const useTableSearchDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      zIndex: 3,
      width: 700,
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    cardActions: {
      borderTop: "1px solid " + colors.grey[100],
      paddingTop: "10px",
      position: "relative",
      bottom: 0,
      textAlign: "center",
      justifyContent: "center",
      width: "100%",
    },
    fieldWrapper: {
      padding: "10px !important",
      flex: "1 0 30%",
    },
  }),
);
