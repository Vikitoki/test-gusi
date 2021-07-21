import { ProductsActions, ProductsState } from "../../../types/productsTypes";
import { CLOSE_PRODUCT_MODAL, OPEN_PRODUCT_MODAL } from "./action-variables";

const initialState: ProductsState = {
  modalProductWindowStatus: false,
  activeProductItem: {
    title: "",
    price: null,
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
    default:
      return state;
  }
};
