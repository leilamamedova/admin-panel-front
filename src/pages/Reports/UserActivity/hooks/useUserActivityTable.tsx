import { useEffect, useState } from "react";

import { IUserActivityItems } from "api/interfaces/reports";
import { getUserActivity } from "api/reports";
import webConfig, { defaultRoute } from "api/webConfig";
import { IPage } from "assets/interfaces";
import { tableInitialCredentials } from "components/table/constants";
import { ITableCredentials } from "components/table/interfaces";
import fileType from "components/uploads/constants/fileTypes";
import { filters } from "pages/Reports/UserActivity/constants";
import { IUseUserActivityTable } from "pages/Reports/UserActivity/interfaces";
import { exportFile, formatDate, toFieldSet } from "utils/Utils";

export const useUserActivityTable = (): IUseUserActivityTable => {
  const [rows, setRows] = useState<IUserActivityItems[]>([]);
  const [pageData, setPageData] = useState<IPage>({
    page: 0,
    limit: 10,
    totalCount: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (params: ITableCredentials): Promise<void> => {
    const { page, limit } = params;

    if (params.fieldSet === null && filters.length > 0) {
      params = { ...params, fieldSet: toFieldSet(filters) };
    }

    const { playerId, activityTypes } = params.fieldSet;

    setLoading(true);
    await getUserActivity(page + 1, limit, playerId, activityTypes)
      .then((response) => {
        if (response) {
          const contents = response.response.items.map((row) => {
            row.createdAt = row.createdAt ? formatDate(row.createdAt) : "";
            // row = Object.assign(
            //   {
            //     actions: (
            //       <IconButton
            //         buttonType={buttonTypes.success}
            //         onClick={() => editRow(row)}
            //         Icon={EditIcon}
            //         tooltipText="Edit"
            //       />
            //     ),
            //   },
            //   row,
            // );
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

  const fetchExport = async (
    params: ITableCredentials,
    isAll: boolean,
  ): Promise<void> => {
    const { page, limit } = params;

    if (params.fieldSet === null && filters.length > 0) {
      params = { ...params, fieldSet: toFieldSet(filters) };
    }

    const { playerId, activityTypes } = params.fieldSet;

    const path =
      defaultRoute +
      webConfig.reports.exportUserActivity +
      `?Page=${
        page + 1
      }&Limit=${limit}&PlayerId=${playerId}&ActivityTypes=${activityTypes}&IsAll=${isAll}`;

    exportFile(path, fileType.XLSX);
  };

  useEffect(() => {
    fetchData(tableInitialCredentials);
  }, []);

  return {
    rows,
    pageData,
    loading,
    fetchData,
    fetchExport,
  };
};

useUserActivityTable.displayName = "useUserActivityTable";
