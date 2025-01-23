import React from "react";

import ReportsTabs from "pages/Reports/ReportsTabs";
import WinnerTable from "pages/Reports/Winner/WinnerTable";

const Winner = (): React.ReactElement => {
  return (
    <>
      <ReportsTabs />
      <WinnerTable />
    </>
  );
};

export default Winner;
