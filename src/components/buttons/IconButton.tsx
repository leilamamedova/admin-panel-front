import React from "react";

import { IconButton as MuiIconButton, Tooltip } from "@mui/material";

import { IIconButton } from "components/buttons/interfaces";
import { useCommonStyle } from "components/buttons/styles";

const IconButton = (props: IIconButton): React.ReactElement => {
  const classes = useCommonStyle(props);

  const { tooltipText, Icon, fontSize, buttonType, ...rest } = props;

  const icon = (
    <MuiIconButton
      {...rest}
      className={`${classes.iconButton} ${rest.buttonClassName}`}
      color={buttonType}>
      <Icon
        fontSize={fontSize ? fontSize : "default"}
        className={`${classes.icon} ${rest.iconClassName}`}
      />
    </MuiIconButton>
  );

  if (tooltipText)
    return (
      <Tooltip className={rest.tooltipClassName} title={tooltipText}>
        {icon}
      </Tooltip>
    );

  return icon;
};

export default IconButton;
