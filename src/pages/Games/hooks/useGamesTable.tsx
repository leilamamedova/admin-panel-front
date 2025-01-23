import React, { useEffect, useState } from "react";

import { createGame, getGames, getSponsors, updateGame } from "api/games";
import { IGamesItems, ISponsor } from "api/interfaces/games";
import { EditIcon } from "assets/icons";
import { IFields, IPage } from "assets/interfaces";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import IconButton from "components/buttons/IconButton";
import { tableInitialCredentials } from "components/table/constants";
import { ITableCredentials } from "components/table/interfaces";
import { fields, filters } from "pages/Games/constants";
import { IUseGamesTable } from "pages/Games/interfaces";
import { dateToString, formatDate, toFieldSet } from "utils/Utils";

export const useGamesTable = (): IUseGamesTable => {
  const [rows, setRows] = useState<IGamesItems[]>([]);
  const [pageData, setPageData] = useState<IPage>({
    page: 0,
    limit: 10,
    totalCount: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [drawerFields, setDrawerFields] = useState<IFields[]>([]);
  const [sponsors, setSponsors] = useState<ISponsor[]>([]);
  const [rowId, setRowId] = useState<number>(null);

  const handleClose = (): void => {
    setOpen(false);
    setRowId(null);

    const updatedFields = [...drawerFields].map((field) => {
      field.value = "";
      return field;
    });
    setDrawerFields(updatedFields);
  };

  const addRow = (): void => {
    setLoading(true);
    setOpen(true);
    setLoading(false);
  };

  const saveRow = async (): Promise<void> => {
    setLoading(true);

    if (rowId) {
      await updateGame(toFieldSet(drawerFields), rowId)
        .then((response) => {
          if (response) {
            handleClose();
            fetchData(tableInitialCredentials);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      await createGame(toFieldSet(drawerFields))
        .then((response) => {
          if (response) {
            handleClose();
            fetchData(tableInitialCredentials);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const editRow = (data: IGamesItems): void => {
    const updatedFields = fields.map((item) => {
      let value;
      let optionsData = [];

      switch (item.name) {
        case "sponsorId":
          value = { id: data.sponsorId, name: data.sponsor };
          optionsData = sponsors;
          break;
        case "startDate":
          value = dateToString(data.startDate);
          break;
        case "endDate":
          value = dateToString(data.endDate);
          break;
        default:
          break;
      }
      return {
        ...item,
        options: optionsData,
        value,
      };
    });

    setDrawerFields(updatedFields);
    setOpen(true);
    setRowId(data.id);
  };

  const setFieldValue = (value: any, name: string): void => {
    const updatedFields = [...drawerFields];
    updatedFields.map((field, index) => {
      if (field.name === name) {
        updatedFields[index].value = value;
      }
    });
    setDrawerFields(updatedFields);
  };

  const fetchData = async (params: ITableCredentials): Promise<void> => {
    const { page, limit } = params;

    if (params.fieldSet === null && filters.length > 0) {
      params = { ...params, fieldSet: toFieldSet(filters) };
    }

    const { startDate, endDate, isCurrent } = params.fieldSet;

    setLoading(true);
    await getGames(page + 1, limit, startDate, endDate, isCurrent)
      .then((response) => {
        if (response) {
          const contents = response.response.items.map((row) => {
            row.createdAt = row.createdAt ? formatDate(row.createdAt) : "";
            row.startDate = row.startDate ? formatDate(row.startDate) : "";
            row.endDate = row.endDate ? formatDate(row.endDate) : "";
            row.sponsor = row.sponsor ? row.sponsor : "";
            row = Object.assign(
              {
                actions: (
                  <IconButton
                    buttonType={buttonTypes.success}
                    onClick={() => editRow(row)}
                    Icon={EditIcon}
                    tooltipText='Edit game'
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
  }, [sponsors]);

  useEffect(() => {
    (async function anyNameFunction() {
      const sponsorsList = await getSponsors();

      const filteredFields = fields.map((item) => {
        let optionsData = [];
        switch (item.name) {
          case "sponsorId":
            optionsData = sponsorsList;
            break;
          default:
            break;
        }
        return {
          ...item,
          options: optionsData,
        };
      });

      setDrawerFields(filteredFields);
      setSponsors(sponsorsList);
    })();
  }, [fields]);

  return {
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
  };
};
