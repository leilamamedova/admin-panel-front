import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import Breadcrumbs from "components/breadcrumbs/Breadcrumbs";
import Header from "components/header/Header";
import { useAppLayout } from "components/layout/hooks/useAppLayout";
import { IAppLayout } from "components/layout/interfaces";
import { ContentHeader } from "components/layout/styles";
import Menu from "components/menu/Menu";
import useMediaQuery from "hooks/useMediaQuery";

const AppLayout = ({ children }: IAppLayout): React.ReactElement => {
  const location = useLocation();

  const { open, handleDrawerOpen, handleDrawerClose } = useAppLayout();
  const { isSm } = useMediaQuery();

  const currentPath = location.pathname.slice(1).toUpperCase();

  useEffect(() => {
    isSm && handleDrawerClose();
  }, [isSm]);

  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={open} handleDrawerClose={handleDrawerClose} />

      <Box component='main' sx={{ flexGrow: 1, p: 3, width: "50%" }}>
        <ContentHeader />
        <Breadcrumbs breadcrumb={currentPath} />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
