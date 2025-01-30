import { Dispatch, SetStateAction } from "react";

import { IColumns, IPage } from "assets/interfaces";
import { IFilters } from "assets/interfaces";

export interface ITable {
  columns: IColumns[];
  rows: any;
  pageData: IPage;
  filters?: IFilters[];
  showSearchDrawer?: boolean;
  showSearch?: boolean;
  additionalButtons?: React.ReactElement;
  fetchData?: (updatedData: ITableCredentials) => void;
}

export interface useTableProps {
  filters?: IFilters[];
  fetchData?: (updatedData: ITableCredentials) => void;
}

export interface IUseTable {
  store: ITableContext;
  handleChangePage: (_event: unknown, newPage: number) => void;
  handleChangeLimit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITableSearch {
  showSearchDrawer?: boolean;
  styles?: any;
}

export interface IUseTableSearch {
  drawerIsOpen: boolean;
  setDrawerIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleDrawer: () => void;
}

export interface ITableSearchDrawer {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface useTableSearchDrawerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IUseTableSearchDrawer {
  setFieldValue: (value: any, fieldName: string) => void;
  searchByFields: () => void;
  emptyFields: () => void;
}

export interface ITableCredentials extends IPage {
  fieldSet: any;
}

export interface ITableContext {
  searchFields: IFilters[];
  handleSearchFieldChange: (value: any, name: string) => void;
  searchByFields: () => void;
  resetFieldValues: () => void;
}
