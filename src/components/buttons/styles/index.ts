import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";
import { buttonColors } from "components/buttons/constants/buttonColors";
import { ButtonStyleProps } from "components/buttons/interfaces";
import { convertHexToRGBA } from "utils/Utils";

export const useCommonStyle = makeStyles(() =>
  createStyles({
    icon: (props: ButtonStyleProps) => ({
      color: props.active
        ? buttonColors[props.buttonType]
        : convertHexToRGBA(buttonColors[props.buttonType], 70),
      "&:disabled": {
        filter: "contrast(0.2)",
      },
    }),
    link: (props: ButtonStyleProps) => ({
      cursor: "pointer",
      color: props.active
        ? buttonColors[props.buttonType]
        : convertHexToRGBA(buttonColors[props.buttonType], 80),
    }),
    button: (props: ButtonStyleProps) => ({
      color: props.active ? "white" : colors.grey[600],
      fontSize: 11,
      padding: "6px !important",
      backgroundColor: props.active
        ? convertHexToRGBA(buttonColors[props.buttonType], 50)
        : convertHexToRGBA(buttonColors[props.buttonType], 5),
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
      backgroundColor: props.active
        ? convertHexToRGBA(buttonColors[props.buttonType], 50)
        : convertHexToRGBA(buttonColors[props.buttonType], 5),
      "&:disabled": {
        filter: "contrast(0.4)",
      },
    }),
  }),
);
