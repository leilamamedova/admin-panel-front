import React from "react";

import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

import { IBreadcrumbs } from "components/breadcrumbs/interfaces";

const Breadcrumbs = ({ breadcrumb }: IBreadcrumbs): React.ReactElement => {
  return (
    <MuiBreadcrumbs separator='›' aria-label='breadcrumb' sx={{ mb: 3 }}>
      <Typography variant='caption'></Typography>
      <Typography variant='caption'>{breadcrumb}</Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
