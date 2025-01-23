import { useState } from "react";

import { IUseTableSearch } from "components/table/interfaces";

export const useTableSearch = (): IUseTableSearch => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    if (drawerIsOpen) setDrawerIsOpen(false);
    else setDrawerIsOpen(true);
  };

  return {
    drawerIsOpen,
    setDrawerIsOpen,
    toggleDrawer,
  };
};
