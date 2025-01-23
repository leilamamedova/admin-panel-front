import React, { useMemo } from "react";

import LoadingComponent from "components/loading/LoadingComponent";
import Table from "components/table/Table";
import { columns, filters } from "pages/Reports/UserActivity/constants";
import { useUserActivityTable } from "pages/Reports/UserActivity/hooks/useUserActivityTable";

const UserActivityTable = (): React.ReactElement => {
  const { rows, pageData, loading, fetchData, fetchExport } =
    useUserActivityTable();

  return useMemo(
    () => (
      <>
        <Table
          columns={columns}
          rows={rows}
          pageData={pageData}
          filters={filters}
          showSearch={true}
          showSearchDrawer={true}
          showExportData={true}
          fetchExport={fetchExport}
          fetchData={fetchData}
        />
        {loading && <LoadingComponent />}
      </>
    ),
    [columns, rows, pageData, loading],
  );
};

export default UserActivityTable;
