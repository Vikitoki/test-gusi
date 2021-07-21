import { CartActions } from "../../types/cartTypes";
import { IActiveProductItem } from "../../types/productsTypes";
import {
  ADD_PRODUCT_ITEM_TO_CART,
  REMOVE_PRODUCT_ITEM_TO_CART,
} from "./action-variables";

export const addProductItemToCart = (
  payload: IActiveProductItem
): CartActions => ({
  type: ADD_PRODUCT_ITEM_TO_CART,
  payload,
});

export const removeProductItemToCart = (payload: number): CartActions => ({
  type: REMOVE_PRODUCT_ITEM_TO_CART,
  payload,
});
