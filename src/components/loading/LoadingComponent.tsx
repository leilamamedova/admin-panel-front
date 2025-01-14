import React from "react";

import { CircularProgress, Skeleton } from "@mui/material";

import { useLoadingStyles } from "./styles";

const LoadingComponent = (): React.ReactElement => {
  const classes = useLoadingStyles();

  return (
    <>
      <Skeleton
        width={"100%"}
        height={"100%"}
        variant='rectangular'
        className={classes.backdrop}
      />
      <CircularProgress className={classes.icon} />
    </>
  );
};

export default LoadingComponent;
