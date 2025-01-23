import React, { useMemo } from "react";

import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import Drawer from "components/drawers/Drawer";
import InputsStructure from "components/inputs/InputsStructure";
import LoadingComponent from "components/loading/LoadingComponent";
import Table from "components/table/Table";
import { columns, filters } from "pages/Games/constants";
import { useGamesTable } from "pages/Games/hooks/useGamesTable";

const GamesTable = (): React.ReactElement => {
  const {
    rows,
    pageData,
    loading,
    open,
    drawerFields,
    setFieldValue,
    handleClose,
    addRow,
    saveRow,
    fetchData,
  } = useGamesTable();

  const additionalButtons = (
    <Button
      buttonType={buttonTypes.warning}
      onClick={addRow}
      variant='contained'>
      Add game
    </Button>
  );

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
          additionalButtons={additionalButtons}
          fetchData={fetchData}
        />
        <Drawer
          open={open}
          loading={loading}
          header='Configuration'
          handleClose={handleClose}
          onSave={saveRow}
          children={
            <InputsStructure
              fields={drawerFields}
              setFieldValue={setFieldValue}
              variant='block'
            />
          }
        />
        {loading && <LoadingComponent />}
      </>
    ),
    [columns, rows, pageData, filters, open, loading],
  );
};

export default GamesTable;
