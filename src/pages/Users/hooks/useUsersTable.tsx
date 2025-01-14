import React, { useEffect, useState } from "react";

import { Switch } from "@mui/material";

import { IUsersItems } from "api/interfaces/users";
import { getUsers, toggleUserActivation } from "api/users";
import { IPage } from "assets/interfaces";
import { tableInitialCredentials } from "components/table/constants";
import { ITableCredentials } from "components/table/interfaces";
import { filters } from "pages/Users/constants";
import { IUseUsersTable } from "pages/Users/interfaces";
import { Avatar } from "pages/Users/styles/UsersTable";
import { formatDate, toFieldSet } from "utils/Utils";

export const useUsersTable = (): IUseUsersTable => {
  const [rows, setRows] = useState<IUsersItems[]>([]);
  const [pageData, setPageData] = useState<IPage>({
    page: 0,
    limit: 10,
    totalCount: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const toggleActivation = async (id, checked): Promise<void> => {
    setLoading(true);

    await toggleUserActivation(id, checked)
      .then((response) => {
        response && fetchData(tableInitialCredentials);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchData = async (params: ITableCredentials): Promise<void> => {
    const { page, limit } = params;

    if (params.fieldSet === null && filters.length > 0) {
      params = { ...params, fieldSet: toFieldSet(filters) };
    }

    const { phoneNumber, name, email } = params.fieldSet;

    setLoading(true);
    await getUsers(page + 1, limit, phoneNumber, name, email)
      .then((response) => {
        if (response) {
          const contents = response.response.items.map((row) => {
            row.dateOfBirth = row.dateOfBirth
              ? formatDate(row.dateOfBirth)
              : "";
            row.imagePath = <Avatar src={row.imagePath} alt='avatar' />;
            row = Object.assign(
              {
                actions: (
                  <Switch
                    checked={row.isActive}
                    onChange={(e) => toggleActivation(row.id, e.target.checked)}
                    color={"warning"}
                  />
                ),
              },
              row,
            );
            return row;
          });
          setRows(contents);
          setPageData({
            page,
            limit,
            totalCount: response.count,
          });
        } else {
          setRows([]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(tableInitialCredentials);
  }, []);

  return {
    rows,
    pageData,
    loading,
    fetchData,
  };
};

useUsersTable.displayName = "useUsersTable";
