import { ErrorMessage, Field } from "formik";
import React, { ReactNode } from "react";
import { FC } from "react";

interface InputProps {
  name?: string;
  labelText?: string;
  [key: string]: string | ReactNode;
}

export const Input: FC<InputProps> = ({ name, labelText, ...rest }) => {
  return (
    <div className="form__item">
      {labelText && (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      )}
      <Field
        {...rest}
        name={name}
        id={name}
        type="text"
        className="form__input"
      ></Field>
      <ErrorMessage name={name!}>
        {(errorMessage) => <span className="form__error">{errorMessage}</span>}
      </ErrorMessage>
    </div>
  );
};
