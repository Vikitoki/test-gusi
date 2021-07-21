import { IActiveProductItem, ProductsActions } from "../../types/productsTypes";
import {
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_LIST_FAILURE,
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  OPEN_PRODUCT_MODAL,
} from "./action-variables";

export const openProductModal = (
  payload: IActiveProductItem
): ProductsActions => ({
  type: OPEN_PRODUCT_MODAL,
  payload,
});

export const closeProductModal = (): ProductsActions => ({
  type: CLOSE_PRODUCT_MODAL,
});

export const fetchProductListRequest = (): ProductsActions => ({
  type: FETCH_PRODUCT_LIST_REQUEST,
});

export const fetchProductListSuccess = (
  payload: IActiveProductItem[]
): ProductsActions => ({
  type: FETCH_PRODUCT_LIST_SUCCESS,
  payload,
});

export const fetchProductListFailure = (payload: string): ProductsActions => ({
  type: FETCH_PRODUCT_LIST_FAILURE,
  payload,
});
