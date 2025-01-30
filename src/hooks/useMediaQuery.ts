import { Theme } from "@mui/material";
import MuiUseMediaQuery from "@mui/material/useMediaQuery";

import { IUseMediaQuery } from "hooks/interfaces";

const useMediaQuery = (): IUseMediaQuery => {
  const isSm = MuiUseMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return {
    isSm,
  };
};

export default useMediaQuery;
