import { IUserReducer, IAction } from "store/reducers/interfaces/userReducer";
import { userTypes as TYPES } from "store/types/UserTypes";
import { updateObject } from "utils/Utils";

const initialState: IUserReducer = {
  userData: "",
};

const addUserData = (state, action): IUserReducer => {
  return updateObject(state, {
    userData: action.userData,
  });
};

export const userReducer = (
  state = initialState,
  action: IAction,
): IUserReducer => {
  switch (action.type) {
    case TYPES.SET_USER_DATA:
      return addUserData(state, action);
    case TYPES.CLEAR_STORE:
      return { ...state, userData: "" };
    default:
      return state;
  }
};
