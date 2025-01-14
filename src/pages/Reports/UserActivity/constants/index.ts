import { fieldTypes } from "assets/constants/fieldTypes";
import { IColumns, IFilters } from "assets/interfaces";

export const activityTypes = [
  { id: "BuyLetter", name: "BuyLetter" },
  { id: "BuyDescription", name: "BuyDescription" },
  { id: "BuyAttempt", name: "BuyAttempt" },
  { id: "BuyNewGame", name: "BuyNewGame" },
  { id: "BuyVipStatus", name: "BuyVipStatus" },
  { id: "GetCoins", name: "GetCoins" },
  { id: "LogIn", name: "LogIn" },
  { id: "LogOut", name: "LogOut" },
];

export const columns: IColumns[] = [
  { name: "playerId", alias: "player id" },
  { name: "message", alias: "message" },
  {
    name: "activityTypeString",
    alias: "activity type",
  },
  { name: "createdAt", alias: "created at" },
];

export const filters: IFilters[] = [
  {
    name: "playerId",
    value: "",
    options: [],
    type: fieldTypes.NUMBER,
  },
  {
    name: "activityTypes",
    value: "",
    options: activityTypes,
    type: fieldTypes.SELECT,
  },
];
