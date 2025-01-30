import React, { useEffect, useState } from "react";

import { IFilters } from "assets/interfaces";
import { tableInitialCredentials } from "components/table/constants";
import {
  ITableContext,
  ITableCredentials,
  IUseTable,
  useTableProps,
} from "components/table/interfaces";
import { updateObject } from "utils/Utils";
import { toFieldSet } from "utils/Utils";

export const useTable = ({ filters, fetchData }: useTableProps): IUseTable => {
  const [tableCredentials, setTableCredentials] = useState<ITableCredentials>(
    tableInitialCredentials,
  );
  const [searchFields, setSearchFields] = useState<IFilters[]>([]);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    const updatedData = updateObject(tableCredentials, {
      page: newPage - 1,
    });

    setTableCredentials(updatedData);
    fetchData(updatedData);
  };

  const handleChangeLimit = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const updatedData = updateObject(tableCredentials, {
      page: 0,
      limit: +event.target.value,
    });

    setTableCredentials(updatedData);
    fetchData(updatedData);
  };

  const handleSearchFieldChange = (value: any, name: string): void => {
    const updatedSearchFields = [...searchFields];
    updatedSearchFields.map((field, index) => {
      if (field.name === name) {
        updatedSearchFields[index].value = value;
      }
    });

    setSearchFields(updatedSearchFields);
  };

  const searchByFields = (): void => {
    const updatedData = updateObject(tableCredentials, {
      fieldSet: toFieldSet(searchFields),
      page: 0,
    });

    setTableCredentials(updatedData);
    fetchData(updatedData);
  };

  const resetFieldValues = (): void => {
    const updatedSearchFields = [...searchFields].map((field) => {
      field.value = "";
      return field;
    });
    const updatedData = updateObject(tableCredentials, {
      fieldSet: null,
      page: 0,
    });

    setTableCredentials(updatedData);
    fetchData(updatedData);
    setSearchFields(updatedSearchFields);
  };

  useEffect(() => {
    setSearchFields(filters);
  }, [filters]);

  const store: ITableContext = {
    searchFields,
    handleSearchFieldChange,
    searchByFields,
    resetFieldValues,
  };

  return {
    store,
    handleChangePage,
    handleChangeLimit,
  };
};
