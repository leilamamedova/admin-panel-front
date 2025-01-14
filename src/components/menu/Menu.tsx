import React from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { colors } from "assets/constants/colors";
import { menuItems } from "assets/constants/menuItems";
import { ChevronRightIcon, ChevronLeftIcon } from "assets/icons";
import { DrawerHeader } from "components/header/styles";
import { IMenu } from "components/menu/interfaces";
import { Button, Drawer } from "components/menu/styles";

const Menu = ({ open, handleDrawerClose }: IMenu): React.ReactElement => {
  const theme = useTheme();

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerHeader>
        Logo
        <Button onClick={handleDrawerClose} color='secondary'>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </Button>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              href={item.link}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: colors.white[900],
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;

Menu.displayName = "Menu";
