import React, { useContext } from "react";

import { Button, Card, CardActions, ClickAwayListener } from "@mui/material";

import { SearchIcon } from "assets/icons";
import InputsStructure from "components/inputs/InputsStructure";
import { useTableSearchDrawer } from "components/table/hooks/useTableSearchDrawer";
import { ITableContext, ITableSearchDrawer } from "components/table/interfaces";
import { useTableSearchDrawerStyles } from "components/table/styles";
import { TableContext } from "components/table/Table";

const TableSearchDrawer = ({
  open,
  setOpen,
}: ITableSearchDrawer): React.ReactElement => {
  const classes = useTableSearchDrawerStyles();

  const { setFieldValue, searchByFields, emptyFields } = useTableSearchDrawer({
    setOpen,
  });

  const store: ITableContext = useContext(TableContext);
  return (
    <>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Card classes={{ root: classes.root }}>
            <InputsStructure
              fields={store.searchFields}
              setFieldValue={setFieldValue}
              className={classes.fieldWrapper}
              variant='flex'
            />

            <CardActions className={classes.cardActions}>
              <Button
                color='primary'
                onClick={searchByFields}
                startIcon={<SearchIcon />}>
                Search
              </Button>
              <Button onClick={emptyFields}>Reset</Button>
            </CardActions>
          </Card>
        </ClickAwayListener>
      )}
    </>
  );
};

export default TableSearchDrawer;
