import React from "react";

import {
  Avatar,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { logOut } from "components/auth/AuthBox";
import { useSettingsMenu } from "components/header/hooks/useSettingsMenu";

const SettingsMenu = (): React.ReactElement => {
  const { anchorEl, handleClick, handleClose } = useSettingsMenu();

  return (
    <>
      <IconButton size='large' onClick={handleClick} color='inherit'>
        <Stack direction='row' spacing={2} alignItems='baseline'>
          <Typography variant='body2' display='block' gutterBottom>
            Admin
          </Typography>
          <Avatar>A</Avatar>
        </Stack>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: -1,
              ml: -2,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default SettingsMenu;
