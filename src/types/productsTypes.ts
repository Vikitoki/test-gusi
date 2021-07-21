import {
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_LIST_FAILURE,
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  OPEN_PRODUCT_MODAL,
} from "../store/products/action-variables";

export interface IActiveProductItem {
  id: number | null;
  title: string;
  description: string;
  price: string;
}

export interface ProductsState {
  modalProductWindowStatus: boolean;
  activeProductItem: IActiveProductItem;
  productItemsList: IActiveProductItem[];
  loading: boolean;
  error: string;
}

interface OpenProductModalAction {
  type: typeof OPEN_PRODUCT_MODAL;
  payload: IActiveProductItem;
}

interface CloseProductModalAction {
  type: typeof CLOSE_PRODUCT_MODAL;
}

interface FetchProductListRequestAction {
  type: typeof FETCH_PRODUCT_LIST_REQUEST;
}

interface FetchProductListSuccessAction {
  type: typeof FETCH_PRODUCT_LIST_SUCCESS;
  payload: IActiveProductItem[];
}

interface FetchProductListFailureAction {
  type: typeof FETCH_PRODUCT_LIST_FAILURE;
  payload: string;
}

export type ProductsActions =
  | OpenProductModalAction
  | CloseProductModalAction
  | FetchProductListRequestAction
  | FetchProductListSuccessAction
  | FetchProductListFailureAction;
