import { useCallback } from "react";

import { DispatchFunction } from "store/actions/interfaces";
import { userTypes as TYPES } from "store/types/UserTypes";

export default class User {
  dispatch: DispatchFunction = () => {};
  constructor(dispatch: DispatchFunction) {
    this.dispatch = dispatch;
  }

  addUserData = useCallback(
    (userData: string) =>
      this.dispatch({
        type: TYPES.SET_USER_DATA,
        userData,
      }),
    [this],
  );

  clearStore = useCallback(
    () =>
      this.dispatch({
        type: TYPES.CLEAR_STORE,
      }),
    [this],
  );
}
