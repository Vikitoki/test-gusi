import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeProductItemToCart } from "../../store/cart/action-creators";
import { IActiveProductItem } from "../../types/productsTypes";

interface CartItemProps {
  product: IActiveProductItem;
}

export const CartItem: FC<CartItemProps> = ({ product }) => {
  // Variables
  const dispatch = useDispatch();

  // Handlers
  const deleteButtonHandler = () => {
    dispatch(removeProductItemToCart(product.id!));
  };

  return (
    <div className="product">
      <div className="product-content">
        <div className="product-info">
          <p className="product-info-title">
            {product.title} - {product.id}
          </p>
          <p className="product-info-description">{product.description}</p>
          <div>
            <span className="product-info-price">{product.price}</span>
          </div>
        </div>
        <div className="product-image-frame">
          <img
            className="product-image"
            src="https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="product-delete">
        <button
          onClick={deleteButtonHandler}
          type="button"
          className="btn btn_black-outline"
        >
          Удалить товар из корзины
        </button>
      </div>
    </div>
  );
};
