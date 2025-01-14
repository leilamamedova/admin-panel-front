import { useCallback } from "react";

import { sessionStatuses } from "assets/constants/sessionStatuses";
import { DispatchFunction } from "store/actions/interfaces";
import { authTypes as TYPES } from "store/types/AuthTypes";

export default class Auth {
  dispatch: DispatchFunction = () => {};
  constructor(dispatch: DispatchFunction) {
    this.dispatch = dispatch;
  }

  setSessionStatus = useCallback(
    (status: sessionStatuses) =>
      this.dispatch({
        type: TYPES.SET_SESSION_STATUS,
        status,
      }),
    [this],
  );
}
