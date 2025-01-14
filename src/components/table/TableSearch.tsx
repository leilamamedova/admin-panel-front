import React, { useContext, useState } from "react";

import { FormControl, InputAdornment, InputLabel } from "@mui/material";

import { SearchIcon } from "assets/icons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import IconButton from "components/buttons/IconButton";
import { useTableSearch } from "components/table/hooks/useTableSearch";
import { ITableContext, ITableSearch } from "components/table/interfaces";
import { Input } from "components/table/styles/TableSearch";
import { TableContext } from "components/table/Table";
import TableSearchDrawer from "components/table/TableSearchDrawer";

const TableSearch = ({
  showSearchDrawer = false,
  styles,
}: ITableSearch): React.ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { drawerIsOpen, setDrawerIsOpen, toggleDrawer } = useTableSearch();

  const store: ITableContext = useContext(TableContext);

  return (
    <div style={{ position: "relative" }}>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='outlined-adornment'>Search</InputLabel>
        <Input
          id='outlined-adornment'
          type={"text"}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={toggleDrawer}
          sx={{
            ...styles,
          }}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                onClick={() => store.handleFullTextSearch(searchValue)}
                Icon={SearchIcon}
                buttonType={buttonTypes.primary}
                tooltipText='Search'
              />
            </InputAdornment>
          }
          label='Password'
        />
      </FormControl>

      {showSearchDrawer && (
        <TableSearchDrawer open={drawerIsOpen} setOpen={setDrawerIsOpen} />
      )}
    </div>
  );
};

export default TableSearch;

TableSearch.displayName = "TableSearch";
