import React from "react";

import LoadingComponent from "components/loading/LoadingComponent";
import Table from "components/table/Table";
import { columns, filters } from "pages/Users/constants";
import { useUsersTable } from "pages/Users/hooks/useUsersTable";

const UsersTable = (): React.ReactElement => {
  const { rows, pageData, loading, fetchData } = useUsersTable();

  return (
    <>
      <Table
        columns={columns}
        rows={rows}
        pageData={pageData}
        filters={filters}
        showSearch={true}
        showSearchDrawer={true}
        fetchData={fetchData}
      />
      {loading && <LoadingComponent />}
    </>
  );
};

export default UsersTable;
