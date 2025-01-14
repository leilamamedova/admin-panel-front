import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";

export const useReportsTabsStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "white",
      marginBottom: 20,
    },
    linkStyle: {
      textDecoration: "none",
      color: "gray",
      "&:active": {
        color: colors.blue[500],
      },
      "&.active": {
        color: colors.blue[500],
      },
    },
  }),
);
