import React from "react";
import { FC } from "react";
import { AuthFormContainer } from "../../components/Forms/FormContainers/AuthFormContainer";

import './AuthPage.scss';

export const AuthPage: FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__container container">
        <div className="auth-page__content">
          <AuthFormContainer />
        </div>
      </div>
    </div>
  );
};
