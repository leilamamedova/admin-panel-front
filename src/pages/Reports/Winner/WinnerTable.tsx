import React, { useMemo } from "react";

import LoadingComponent from "components/loading/LoadingComponent";
import Table from "components/table";
import { columns, filters } from "pages/Reports/Winner/constants";
import { useWinnerTable } from "pages/Reports/Winner/hooks/useWinnerTable";

const WinnerTable = (): React.ReactElement => {
  const { rows, pageData, loading, fetchData, fetchExport } = useWinnerTable();

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

export default WinnerTable;

WinnerTable.displayName = "WinnerTable";
