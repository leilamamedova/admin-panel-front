import { IGamesItems } from "api/interfaces/games";
import { IFields, IPage } from "assets/interfaces";
import { ITableCredentials } from "components/table/interfaces";

export interface IUseGamesTable {
  rows: IGamesItems[];
  pageData: IPage;
  loading: boolean;
  open: boolean;
  drawerFields: IFields[];
  setFieldValue: (value: any, name: string) => void;
  handleClose: () => void;
  addRow: () => void;
  saveRow: () => void;
  fetchData: (params: ITableCredentials) => Promise<void>;
}
