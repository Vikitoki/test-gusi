import { ProductsActions, ProductsState } from "../../types/productsTypes";
import {
  CLOSE_PRODUCT_MODAL,
  FETCH_PRODUCT_LIST_FAILURE,
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  OPEN_PRODUCT_MODAL,
} from "./action-variables";

const initialState: ProductsState = {
  modalProductWindowStatus: false,
  loading: false,
  productItemsList: [],
  error: "",
  activeProductItem: {
    title: "",
    price: "",
    id: null,
    description: "",
  },
};

export const productsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case OPEN_PRODUCT_MODAL:
      return {
        ...state,
        modalProductWindowStatus: true,
        activeProductItem: action.payload,
      };
    case CLOSE_PRODUCT_MODAL:
      return {
        ...state,
        modalProductWindowStatus: false,
      };
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        productItemsList: action.payload,
      };
    default:
      return state;
  }
};
