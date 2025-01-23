import { useEffect, useState } from "react";

import { IWinnerItems } from "api/interfaces/reports";
import { getWinner } from "api/reports";
import webConfig, { defaultRoute } from "api/webConfig";
import { IPage } from "assets/interfaces";
import { tableInitialCredentials } from "components/table/constants";
import { ITableCredentials } from "components/table/interfaces";
import fileType from "components/uploads/constants/fileTypes";
import { filters } from "pages/Reports/Winner/constants";
import { IUseWinnerTable } from "pages/Reports/Winner/interfaces";
import { exportFile, toFieldSet } from "utils/Utils";

export const useWinnerTable = (): IUseWinnerTable => {
  const [rows, setRows] = useState<IWinnerItems[]>([]);
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

    const { userId, weekId, rank, prizeId } = params.fieldSet;

    setLoading(true);
    await getWinner(page + 1, limit, userId, weekId, rank, prizeId)
      .then((response) => {
        if (response) {
          const contents = response.response.items.map((row) => {
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

    const { userId, weekId, rank, prizeId } = params.fieldSet;

    const path =
      defaultRoute +
      webConfig.reports.exportWinner +
      `?Page=${
        page + 1
      }&Limit=${limit}&UserId=${userId}&WeekId=${weekId}&Rank=${rank}&PrizeId=${prizeId}&IsAll=${isAll}`;

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
