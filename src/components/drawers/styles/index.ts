import { createStyles, makeStyles } from "@mui/styles";

export const useDrawerStyles = makeStyles(() =>
  createStyles({
    root: {
      right: "50px !important",
    },
    header: {
      textAlign: "center",
    },
    button: {
      width: 20,
      marginTop: "10px !important",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "end",
    },
  }),
);
