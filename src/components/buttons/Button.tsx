import React from "react";

import { Tooltip } from "@mui/material";
import MuiButton from "@mui/material/Button";
import clsx from "clsx";

import { IButton } from "components/buttons/interfaces";
import { useCommonStyle } from "components/buttons/styles";

const Button = (props: IButton): React.ReactElement => {
  const classes = useCommonStyle(props);

  const { tooltipText, Icon, children, buttonType, ...rest } = props;

  const button = (
    <MuiButton
      {...rest}
      size='small'
      color={buttonType}
      className={clsx(classes.button, rest.className)}
      startIcon={Icon ? <Icon className={classes.icon} /> : null}>
      {children}
    </MuiButton>
  );

  if (tooltipText) {
    return (
      <Tooltip title={tooltipText}>
        <div>{button}</div>
      </Tooltip>
    );
  }

  return button;
};

export default Button;
