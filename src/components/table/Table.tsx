import React, { createContext } from "react";

import {
  Pagination,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import MuiTable from "@mui/material/Table";

import { useTable } from "components/table/hooks/useTable";
import { ITable } from "components/table/interfaces";
import { useTableStyles } from "components/table/styles";
import {
  AdditionalButtons,
  SearchContainer,
} from "components/table/styles/Table";
import TableSearch from "components/table/TableSearch";

export const TableContext = createContext(null);

const Table = ({
  columns,
  rows,
  pageData,
  filters,
  showSearchDrawer = false,
  showSearch = false,
  additionalButtons = null,
  fetchData,
}: ITable): React.ReactElement => {
  const classes = useTableStyles();

  const { store, handleChangePage, handleChangeLimit } = useTable({
    filters,
    fetchData,
  });

  const page = pageData.page;
  const limit = pageData.limit;
  const size = pageData.totalCount;

  return (
    <TableContext.Provider value={store}>
      <SearchContainer
        style={{ justifyContent: showSearch ? "space-between" : "flex-end" }}>
        {showSearch && <TableSearch showSearchDrawer={showSearchDrawer} />}

        <AdditionalButtons>{additionalButtons}</AdditionalButtons>
      </SearchContainer>

      <Paper className={classes.root}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <MuiTable stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.name}
                    sx={{ minWidth: 100, textAlign: "center" }}>
                    {column.alias.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      return (
                        <TableCell key={index} sx={{ textAlign: "center" }}>
                          {row[column.name]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </MuiTable>
        </TableContainer>

        <div className={classes.paginationContainer}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={size}
            rowsPerPage={limit}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeLimit}
          />
          <Pagination
            count={Math.ceil(size / limit)}
            page={page + 1}
            boundaryCount={2}
            onChange={handleChangePage}
          />
        </div>
      </Paper>
    </TableContext.Provider>
  );
};

export default Table;
