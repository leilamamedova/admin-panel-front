import { sessionStatuses } from "assets/constants/sessionStatuses";

export interface IAuthReducer {
  sessionStatus: string;
}

export interface IAction {
  type: string;
  status: sessionStatuses;
}
