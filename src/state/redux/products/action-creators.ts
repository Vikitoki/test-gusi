import {
  IActiveProductItem,
  ProductsActions,
} from "../../../types/productsTypes";
import { CLOSE_PRODUCT_MODAL, OPEN_PRODUCT_MODAL } from "./action-variables";

export const openProductModal = (
  payload: IActiveProductItem
): ProductsActions => ({
  type: OPEN_PRODUCT_MODAL,
  payload,
});

export const closeProductModal = (): ProductsActions => ({
  type: CLOSE_PRODUCT_MODAL,
});
