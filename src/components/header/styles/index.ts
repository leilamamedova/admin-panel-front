import { Toolbar } from "@mui/material";
import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

import { colors } from "assets/constants/colors";
import { drawerWidth } from "assets/constants/menuItems";
import { HeaderStyleProps } from "components/header/interfaces";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<HeaderStyleProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  justifyContent: "space-between",
  background: colors.blue[900],
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    justifyContent: "flex-end",
  }),
}));

export const ToolbarContainer = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "open",
})<HeaderStyleProps>(({ open }) => ({
  justifyContent: "space-between",
  ...(open && {
    justifyContent: "flex-end",
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 0, 0, 3),
  ...theme.mixins.toolbar,
}));
