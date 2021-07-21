import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <Link className="header__link" to="/">
                Домой
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/cart">
                Корзина
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/auth">
                Регистрация
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
