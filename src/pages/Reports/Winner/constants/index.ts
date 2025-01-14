import { fieldTypes } from "assets/constants/fieldTypes";
import { IColumns, IFilters } from "assets/interfaces";

export const columns: IColumns[] = [
  { name: "prizeId", alias: "prize id" },
  { name: "weekId", alias: "week id" },
  { name: "userId", alias: "user id" },
  { name: "userName", alias: "user name" },
  { name: "rank", alias: "rank" },
  { name: "prizeName", alias: "prize name" },
];

export const filters: IFilters[] = [
  {
    name: "userId",
    value: "",
    options: [],
    type: fieldTypes.NUMBER,
  },
  {
    name: "weekId",
    value: "",
    options: [],
    type: fieldTypes.NUMBER,
  },
  {
    name: "rank",
    value: "",
    options: [],
    type: fieldTypes.NUMBER,
  },
  {
    name: "prizeId",
    value: "",
    options: [],
    type: fieldTypes.NUMBER,
  },
];
