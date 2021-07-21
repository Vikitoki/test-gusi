import { Dispatch } from "react";
import {
  fetchRegistrationUserDataFailure,
  fetchRegistrationUserDataRequest,
  fetchRegistrationUserDataSuccess,
  logOutCurrentUser,
} from "../../store/user/userRegistration/action-creators";
import { AuthFormContainerState } from "../../types/formTypes";
import { ICurrentUser, UserActions } from "../../types/userTypes";
import { v4 as uuidv4 } from "uuid";

const ERROR_MESSAGE_REGISTRATION =
  "Произошла ошибка при регистрации, попробуйте позже";
const ERROR_MESSAGE_EXIST = "Такой пользователь уже существует";

export const registrationNewUser = (data: AuthFormContainerState) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(fetchRegistrationUserDataRequest());

      // Get

      const responseGet = await fetch(
        `http://localhost:3004/users?userEmail=${data.userEmail}`
      );

      if (!responseGet.ok) {
        throw new Error(ERROR_MESSAGE_REGISTRATION);
      }

      const dataGet: ICurrentUser[] = await responseGet.json();

      if (dataGet.length !== 0) {
        dispatch(fetchRegistrationUserDataFailure(ERROR_MESSAGE_EXIST));
        return;
      }

      // Post

      const newUser = { ...data, id: uuidv4() };

      const responsePost = await fetch(`http://localhost:3004/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responsePost.ok) {
        throw new Error(ERROR_MESSAGE_REGISTRATION);
      }

      const dataResponse: ICurrentUser = await responsePost.json();

      dispatch(fetchRegistrationUserDataSuccess(dataResponse));
      localStorage.setItem("currentUser", JSON.stringify(dataResponse));
    } catch (error) {
      dispatch(fetchRegistrationUserDataFailure(ERROR_MESSAGE_REGISTRATION));
    }
  };
};

export const logOutUser = () => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch(logOutCurrentUser());
    localStorage.removeItem("currentUser");
  };
};
