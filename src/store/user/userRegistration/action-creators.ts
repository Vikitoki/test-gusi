import { ICurrentUser, UserActions } from "../../../types/userTypes";
import {
  FETCH_REGISTRATION_USER_DATA_FAILURE,
  FETCH_REGISTRATION_USER_DATA_REQUEST,
  FETCH_REGISTRATION_USER_DATA_SUCCESS,
  LOG_OUT_CURRENT_USER,
} from "./action-variables";

export const fetchRegistrationUserDataFailure = (
  payload: string
): UserActions => ({
  type: FETCH_REGISTRATION_USER_DATA_FAILURE,
  payload,
});

export const fetchRegistrationUserDataSuccess = (
  payload: ICurrentUser
): UserActions => ({
  type: FETCH_REGISTRATION_USER_DATA_SUCCESS,
  payload,
});

export const fetchRegistrationUserDataRequest = (): UserActions => ({
  type: FETCH_REGISTRATION_USER_DATA_REQUEST,
});

export const logOutCurrentUser = (): UserActions => ({
  type: LOG_OUT_CURRENT_USER,
});
