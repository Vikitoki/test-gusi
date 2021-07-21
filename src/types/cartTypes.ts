import {
  ADD_PRODUCT_ITEM_TO_CART,
  REMOVE_PRODUCT_ITEM_TO_CART,
} from "../store/cart/action-variables";
import { IActiveProductItem } from "./productsTypes";

export interface CartState {
  cartItemsList: IActiveProductItem[];
}

interface AddProductItemToCartAction {
  type: typeof ADD_PRODUCT_ITEM_TO_CART;
  payload: IActiveProductItem;
}

interface RemoveProductItemToCartAction {
  type: typeof REMOVE_PRODUCT_ITEM_TO_CART;
  payload: number;
}

export type CartActions =
  | AddProductItemToCartAction
  | RemoveProductItemToCartAction;
