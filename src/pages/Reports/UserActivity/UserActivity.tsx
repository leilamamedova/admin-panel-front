import React from "react";

import ReportsTabs from "pages/Reports/ReportsTabs";
import UserActivityTable from "pages/Reports/UserActivity/UserActivityTable";

const UserActivity = (): React.ReactElement => {
  return (
    <>
      <ReportsTabs />
      <UserActivityTable />
    </>
  );
};

export default UserActivity;
