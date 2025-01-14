import { IWinnerItems } from "api/interfaces/reports";
import { IPage } from "assets/interfaces";
import { ITableCredentials } from "components/table/interfaces";

export interface IUseWinnerTable {
  rows: IWinnerItems[];
  pageData: IPage;
  loading: boolean;
  fetchData: (params: ITableCredentials) => Promise<void>;
  fetchExport: (params: ITableCredentials, isAll: boolean) => Promise<void>;
}
