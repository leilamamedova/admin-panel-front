import { IconButtonProps } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

import { buttonTypes } from "components/buttons/constants/buttonTypes";

export interface IButton extends ButtonProps {
  Icon?: any;
  buttonType: buttonTypes;
  tooltipText?: string;
  active?: boolean;
}

export interface IIconButton extends IconButtonProps {
  Icon: any;
  buttonType: buttonTypes;
  tooltipText?: string;
  active?: boolean;
  fontSize?: string;
  iconClassName?: any;
  tooltipClassName?: any;
  buttonClassName?: any;
}

export interface ButtonStyleProps {
  buttonType: buttonTypes;
  active?: boolean;
}
