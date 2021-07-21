import React, { FC } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./CartPage.scss";

export const CartPage: FC = () => {
  const { cartItemsList } = useTypedSelector((state) => state.cart);

  return (
    <div className="cart-page">
      {cartItemsList.length === 0 ? (
        <span className="status-text">Ваша корзина пуста</span>
      ) : (
        <div className="cart-page__container container">
          <ul className="cart-page__list">
            {cartItemsList.map((item) => {
              return (
                <li key={item.id}>
                  <CartItem product={item} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
