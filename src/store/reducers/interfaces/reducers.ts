import { IAuthReducer } from "store/reducers/interfaces/authReducer";
import { IUserReducer } from "store/reducers/interfaces/userReducer";

export interface IReducers {
  authReducer: IAuthReducer;
  userReducer: IUserReducer;
}
