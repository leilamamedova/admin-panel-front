import { IUsersItems } from "api/interfaces/users";
import { IPage } from "assets/interfaces";
import { ITableCredentials } from "components/table/interfaces";

export interface IUseUsersTable {
  rows: IUsersItems[];
  pageData: IPage;
  loading: boolean;
  fetchData: (params: ITableCredentials) => Promise<void>;
}
