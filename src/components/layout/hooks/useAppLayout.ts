import { useState } from "react";

import { IUseAppLayout } from "components/layout/interfaces";

export const useAppLayout = (): IUseAppLayout => {
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  return {
    open,
    handleDrawerOpen,
    handleDrawerClose,
  };
};
