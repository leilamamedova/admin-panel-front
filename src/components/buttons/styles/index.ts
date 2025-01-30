import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";
import { buttonColors } from "components/buttons/constants/buttonColors";
import { ButtonStyleProps } from "components/buttons/interfaces";

export const useCommonStyle = makeStyles(() =>
  createStyles({
    icon: (props: ButtonStyleProps) => ({
      color: buttonColors[props.buttonType],
      "&:disabled": {
        filter: "contrast(0.2)",
      },
    }),
    link: (props: ButtonStyleProps) => ({
      cursor: "pointer",
      color: buttonColors[props.buttonType],
    }),
    button: (props: ButtonStyleProps) => ({
      color: props.active ? "white" : colors.grey[600],
      fontSize: 11,
      padding: "6px !important",
      backgroundColor: buttonColors[props.buttonType],
      "&:disabled": {
        filter: "contrast(0.4)",
      },
    }),
    iconButton: (props: ButtonStyleProps) => ({
      color: props.active ? "white" : colors.grey[600],
      fontSize: 11,
      padding: "10px 0px !important",
      "&:hover": {
        background: "transparent !important",
      },
      backgroundColor: buttonColors[props.buttonType],
      "&:disabled": {
        filter: "contrast(0.4)",
      },
    }),
  }),
);
