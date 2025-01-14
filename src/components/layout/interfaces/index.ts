export interface IAppLayout {
  children: any;
}

export interface IAuthLayout {
  children: any;
}

export interface IUseAppLayout {
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}
