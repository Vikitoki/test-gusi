import {
  CLOSE_PRODUCT_MODAL,
  OPEN_PRODUCT_MODAL,
} from "../state/redux/products/action-variables";

export interface IActiveProductItem {
  id: number | null;
  title: string;
  description: string;
  price: number | null;
}

export interface ProductsState {
  modalProductWindowStatus: boolean;
  activeProductItem: IActiveProductItem;
}

interface OpenProductModalAction {
  type: typeof OPEN_PRODUCT_MODAL;
  payload: IActiveProductItem;
}

interface CloseProductModalAction {
  type: typeof CLOSE_PRODUCT_MODAL;
}

export type ProductsActions = OpenProductModalAction | CloseProductModalAction;
