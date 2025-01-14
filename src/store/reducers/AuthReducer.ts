import { sessionStatuses } from "assets/constants/sessionStatuses";
import { IAuthReducer, IAction } from "store/reducers/interfaces/authReducer";
import { authTypes as TYPES } from "store/types/AuthTypes";
import { updateObject } from "utils/Utils";

const initialState: IAuthReducer = {
  sessionStatus: sessionStatuses.start,
};

export const authReducer = (
  state = initialState,
  action: IAction,
): IAuthReducer => {
  switch (action.type) {
    case TYPES.SET_SESSION_STATUS:
      return updateObject(state, {
        sessionStatus: action.status,
      });
    default:
      return state;
  }
};
