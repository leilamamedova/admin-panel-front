import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface IHeader {
  open: boolean;
  handleDrawerOpen: () => void;
}

export interface HeaderStyleProps extends MuiAppBarProps {
  open?: boolean;
}

export interface IUseSettingsMenu {
  anchorEl: HTMLElement;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}
