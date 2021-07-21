import React from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../UI/FormControl";
import * as Yup from "yup";

export const AuthFormContainer = () => {
  // Variables
  const initialValues = {
    userEmail: "",
    userPassword: "",
  };

  const validationSchema = Yup.object({
    userEmail: Yup.string()
      .email("Неверный формат почты")
      .required("Поле обязательно для заполнения"),
    userPassword: Yup.string()
      .min(8, "Пароль не может быть меньше 8 символов")
      .required("Поле обязательно для заполнения"),
  });

  // Handlers

  const onSubmit = (values: any) => {};

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
          </Form>
        );
      }}
    </Formik>
  );
};
