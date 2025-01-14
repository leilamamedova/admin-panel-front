import { fieldTypes } from "assets/constants/fieldTypes";

export interface IPage {
  page: number;
  limit: number;
  totalCount: number;
}

export interface IFilters {
  name: string;
  value: string | number | any[] | null;
  options: any[];
  type: fieldTypes;
}

export interface IFields {
  name: string;
  value: string | number | any[] | null;
  options: any[];
  type: fieldTypes;
}

export interface IColumns {
  name: string;
  alias: string;
}
