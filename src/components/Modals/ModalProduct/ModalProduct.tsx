import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addProductItemToCart } from "../../../store/cart/action-creators";
import { closeProductModal } from "../../../store/products/action-creators";

import "./ModalProduct.scss";

export const ModalProduct: FC = (props) => {
  // Variables
  const { activeProductItem, modalProductWindowStatus } = useTypedSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const history = useHistory();

  // Handlers

  const closeButtonHandler = () => {
    dispatch(closeProductModal());
  };

  const addToCartButtonHandler = () => {
    dispatch(addProductItemToCart(activeProductItem));
    dispatch(closeProductModal());
    history.push("/cart");
  };

  return (
    <div className={`modal-product ${modalProductWindowStatus && "active"}`}>
      <div className="modal-product__container">
        <div className="modal-product__content content-modal-product">
          <button
            onClick={closeButtonHandler}
            type="button"
            className="content-modal-product__close"
          >
            Закрыть
          </button>

          {activeProductItem ? (
            <>
              <div className="content-modal-product__main">
                <div className="content-modal-product__left">
                  <h2 className="content-modal-product__title">
                    {`${activeProductItem.title} ${activeProductItem.id}`}
                  </h2>
                  <div className="content-modal-product__description">
                    <p>{activeProductItem.description}</p>
                  </div>
                  <span className="content-modal-product__price">
                    {activeProductItem.price}
                  </span>
                </div>
                <div className="content-modal-product__right">
                  <div className="content-modal-product__img">
                    <img
                      src="https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="content-modal-product__btns">
                <button
                  onClick={addToCartButtonHandler}
                  type="button"
                  className="btn btn_black-outline"
                >
                  Добавить в корзину
                </button>
              </div>
            </>
          ) : (
            <span>Что-то пошло не так, повторите попытку позже</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
