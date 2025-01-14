import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";

export const useLoginStyles = makeStyles(() =>
  createStyles({
    textField: {
      width: "350px",
    },
    link: {
      textDecoration: "none",
      color: colors.grey[400],
      "& :hover": {
        textDecoration: "underline",
      },
    },
  }),
);
