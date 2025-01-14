import { fieldTypes } from "assets/constants/fieldTypes";
import { IColumns, IFields, IFilters } from "assets/interfaces";

export const columns: IColumns[] = [
  { name: "createdAt", alias: "created at" },
  { name: "sponsor", alias: "sponsor" },
  { name: "startDate", alias: "start date" },
  { name: "endDate", alias: "end date" },
  { name: "actions", alias: "actions" },
];

export const filters: IFilters[] = [
  {
    name: "startDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "endDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "isCurrent",
    value: "",
    options: [],
    type: fieldTypes.CHECKBOX,
  },
];

export const fields: IFields[] = [
  {
    name: "startDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "endDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "sponsorId",
    value: "",
    options: [],
    type: fieldTypes.SELECT,
  },
];
