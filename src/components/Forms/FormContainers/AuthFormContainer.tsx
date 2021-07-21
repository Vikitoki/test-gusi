import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../UI/FormControl";
import * as Yup from "yup";
import { FC } from "react";
import { AuthFormContainerState } from "../../../types/formTypes";
import { useDispatch } from "react-redux";
import { registrationNewUser } from "../../../services/rest/authActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useHistory } from "react-router-dom";

export const AuthFormContainer: FC = () => {
  // Variables
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues: AuthFormContainerState = {
    userEmail: "",
    userPassword: "",
  };
  const { error, loading, currentUser } = useTypedSelector(
    (state) => state.user
  );

  // Effects
  useEffect(() => {
    if (currentUser.id) {
      history.push("/");
    }
  }, [currentUser.id, history]);

  const validationSchema = Yup.object({
    userEmail: Yup.string()
      .email("Неверный формат почты")
      .required("Поле обязательно для заполнения"),
    userPassword: Yup.string()
      .min(8, "Пароль не может быть меньше 8 символов")
      .required("Поле обязательно для заполнения"),
  });

  // Handlers

  const onSubmit = (values: AuthFormContainerState) => {
    dispatch(registrationNewUser(values));
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              <FormControl
                control="input"
                name="userEmail"
                labelText="Введите свою почту"
                type="email"
              />
              <FormControl
                control="input"
                name="userPassword"
                labelText="Введите пароль"
                type="password"
              />
            </div>
            <div className="form__btns">
              <button type="submit" className="btn btn_black-outline">
                Зарегистрироваться
              </button>
            </div>

            {loading ? (
              <span className="form__status">
                Подождите идёт отправка данных...
              </span>
            ) : error ? (
              <span className="form__status">{error}</span>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};
