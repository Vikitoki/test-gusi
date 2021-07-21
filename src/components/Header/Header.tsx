import React from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { logOutUser } from "../../services/rest/authActions";

import "./Header.scss";

export const Header: FC = () => {
  // Variables
  const dispatch = useDispatch();
  const { currentUser } = useTypedSelector((state) => state.user);
  // Hendlers

  const buttonContextMenuHandler = () => {
    dispatch(logOutUser());
  };

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
            {currentUser.id ? (
              <li>
                <button
                  onClick={buttonContextMenuHandler}
                  type="button"
                  className="header__link"
                >
                  {currentUser.userEmail} при нажатии разлогинит
                </button>
              </li>
            ) : (
              <li>
                <Link className="header__link" to="/auth">
                  Регистрация
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
