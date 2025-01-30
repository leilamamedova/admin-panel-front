import { routes } from "assets/constants/routes";
import { PersonIcon, SportsEsportsIcon } from "assets/icons";

export const drawerWidth = 240;

export const menuItems = [
  {
    icon: <PersonIcon />,
    label: "Users",
    link: routes.users,
  },
  {
    icon: <SportsEsportsIcon />,
    label: "Games",
    link: routes.games,
  },
];
