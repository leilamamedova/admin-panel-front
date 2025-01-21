import React from "react";

import { MenuIcon } from "assets/icons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import IconButton from "components/buttons/IconButton";
import { IHeader } from "components/header/interfaces";
import SettingsMenu from "components/header/SettingsMenu";
import { AppBar, ToolbarContainer } from "components/header/styles";

const Header = ({ open, handleDrawerOpen }: IHeader): React.ReactElement => {
  return (
    <AppBar position='fixed' open={open}>
      <ToolbarContainer open={open}>
        <IconButton
          buttonType={buttonTypes.inherit}
          Icon={MenuIcon}
          edge='start'
          sx={{
            ...(open && { display: "none" }),
          }}
          onClick={handleDrawerOpen}
        />
        <SettingsMenu />
      </ToolbarContainer>
    </AppBar>
  );
};

export default Header;
