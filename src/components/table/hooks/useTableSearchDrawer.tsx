import { useContext, useRef } from "react";

import {
  ITableContext,
  IUseTableSearchDrawer,
  useTableSearchDrawerProps,
} from "components/table/interfaces";
import { TableContext } from "components/table/Table";

export const useTableSearchDrawer = ({
  setOpen,
}: useTableSearchDrawerProps): IUseTableSearchDrawer => {
  const store: ITableContext = useContext(TableContext);
  const timeoutRef = useRef(null);

  const setFieldValue = (value: any, fieldName: string): void => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      store.handleSearchFieldChange(value, fieldName);
    }, 500);
  };

  const searchByFields = (): void => {
    store.searchByFields();
    setOpen(false);
  };

  const emptyFields = (): void => {
    store.resetFieldValues();
    setOpen(false);
  };

  return {
    setFieldValue,
    searchByFields,
    emptyFields,
  };
};
