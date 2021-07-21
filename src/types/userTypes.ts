import {
  FETCH_REGISTRATION_USER_DATA_FAILURE,
  FETCH_REGISTRATION_USER_DATA_REQUEST,
  FETCH_REGISTRATION_USER_DATA_SUCCESS,
  LOG_OUT_CURRENT_USER,
} from "../store/user/userRegistration/action-variables";
import { AuthFormContainerState } from "./formTypes";

export interface ICurrentUser extends AuthFormContainerState {
  id: number | null;
}

export interface UserState {
  currentUser: ICurrentUser;
  loading: boolean;
  error: string;
}

interface FetchRegistrationUserDataRequestAction {
  type: typeof FETCH_REGISTRATION_USER_DATA_REQUEST;
}

interface FetchRegistrationUserDataFailureAction {
  type: typeof FETCH_REGISTRATION_USER_DATA_FAILURE;
  payload: string;
}

interface FetchRegistrationUserDataSuccessAction {
  type: typeof FETCH_REGISTRATION_USER_DATA_SUCCESS;
  payload: ICurrentUser;
}

interface LogOutCurrentUserAction {
  type: typeof LOG_OUT_CURRENT_USER;
}

export type UserActions =
  | FetchRegistrationUserDataRequestAction
  | FetchRegistrationUserDataFailureAction
  | FetchRegistrationUserDataSuccessAction
  | LogOutCurrentUserAction;
