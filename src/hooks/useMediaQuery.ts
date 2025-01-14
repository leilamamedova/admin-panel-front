import { useMediaQuery as MuiUseMediaQuery, Theme } from "@mui/material";

import { IUseMediaQuery } from "hooks/interfaces";

const useMediaQuery = (): IUseMediaQuery => {
  const isSm = MuiUseMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return { isSm };
};

export default useMediaQuery;

useMediaQuery.displayName = "useMediaQuery";
