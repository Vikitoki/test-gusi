import { CartState, CartActions } from "../../types/cartTypes";
import {
  ADD_PRODUCT_ITEM_TO_CART,
  REMOVE_PRODUCT_ITEM_TO_CART,
} from "./action-variables";

const initialState: CartState = {
  cartItemsList: [],
};

export const cartReducer = (
  state = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ADD_PRODUCT_ITEM_TO_CART:
      const newItem = action.payload;
      const existItem = state.cartItemsList.find(
        (item) => item.id === newItem.id
      );

      if (existItem) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        cartItemsList: [...state.cartItemsList, newItem],
      };
    case REMOVE_PRODUCT_ITEM_TO_CART:
      return {
        ...state,
        cartItemsList: state.cartItemsList.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
