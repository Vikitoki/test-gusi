import { UserActions, UserState } from "../../../types/userTypes";
import {
  FETCH_REGISTRATION_USER_DATA_FAILURE,
  FETCH_REGISTRATION_USER_DATA_REQUEST,
  FETCH_REGISTRATION_USER_DATA_SUCCESS,
  LOG_OUT_CURRENT_USER,
} from "./action-variables";

const initialState: UserState = {
  currentUser: {
    id: null,
    userPassword: "",
    userEmail: "",
  },
  loading: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case FETCH_REGISTRATION_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REGISTRATION_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_REGISTRATION_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currentUser: action.payload,
      };
    case LOG_OUT_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          id: null,
          userPassword: "",
          userEmail: "",
        },
      };
    default:
      return state;
  }
};
