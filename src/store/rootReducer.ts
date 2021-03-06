import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { productsReducer } from "./products/reducer";
import { userReducer } from "./user/userRegistration/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});
