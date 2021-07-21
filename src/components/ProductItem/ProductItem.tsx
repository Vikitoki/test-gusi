import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { openProductModal } from "../../store/products/action-creators";
import { IActiveProductItem } from "../../types/productsTypes";

import "./ProductItem.scss";

interface ProductProps {
  product: IActiveProductItem;
}

export const ProductItem: FC<ProductProps> = ({ product }) => {
  // Variables
  const dispatch = useDispatch();

  const price = product.price!.toLocaleString("ru", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: "RUB",
    style: "currency",
  });

  // Handlers

  const productButtonHandler = () => {
    dispatch(openProductModal(product));
  };

  return (
    <button onClick={productButtonHandler} className="product">
      <div className="product-info">
        <p className="product-info-title">
          {product.title} - {product.id}
        </p>
        <p className="product-info-description">{product.description}</p>
        <div>
          <span className="product-info-price">{price}</span>
        </div>
      </div>
      <div className="product-image-frame">
        <img
          className="product-image"
          src="https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"
          alt=""
        />
      </div>
    </button>
  );
};
