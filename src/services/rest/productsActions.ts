import { Dispatch } from "react";
import {
  fetchProductListFailure,
  fetchProductListRequest,
  fetchProductListSuccess,
} from "../../store/products/action-creators";
import { IActiveProductItem, ProductsActions } from "../../types/productsTypes";

const ERROR_MESSAGE = "Что-то пошло не так, повторите попытку позже";

export const getProductsList = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch(fetchProductListRequest());

      const response = await fetch("http://localhost:3004/products");

      if (!response.ok) {
        throw new Error(ERROR_MESSAGE);
      }

      const data: IActiveProductItem[] = await response.json();

      dispatch(fetchProductListSuccess(data));
    } catch (error) {
      dispatch(fetchProductListFailure(ERROR_MESSAGE));
    }
  };
};
