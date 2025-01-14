import React, { useEffect, useState } from "react";

import { Tabs, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";

import { routes } from "assets/constants/routes";
import { useReportsTabsStyles } from "pages/Reports/styles";

const ReportsTabs = (): React.ReactElement => {
  const classes = useReportsTabsStyles();

  const [value, setValue] = useState(0);

  const handleChange = (
    _event: React.ChangeEvent<any>,
    newValue: number,
  ): void => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case routes.reports.userActivity:
        setValue(0);
        break;
      case routes.reports.winner:
        setValue(1);
        break;
      default:
        setValue(0);
        break;
    }
  }, []);

  return (
    <div className={classes.container}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}>
        <Tab
          value={0}
          to={routes.reports.userActivity}
          label='User activity'
          component={NavLink}
          className={classes.linkStyle}
        />
        <Tab
          value={1}
          to={routes.reports.winner}
          label='Winner'
          component={NavLink}
          className={classes.linkStyle}
        />
      </Tabs>
    </div>
  );
};
export default ReportsTabs;

ReportsTabs.displayName = "ReportsTabs";
