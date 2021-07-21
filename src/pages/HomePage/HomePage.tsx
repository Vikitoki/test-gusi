import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalProduct from "../../components/Modals/ModalProduct/ModalProduct";
import ProductList from "../../components/ProductList/ProductList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getProductsList } from "../../services/rest/productsActions";

import "./HomePage.scss";

export const HomePage: FC = () => {
  // Variables
  const dispatch = useDispatch();
  const { productItemsList, loading, error } = useTypedSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  return (
    <div className="home-page">
      {loading ? (
        <span className="status-text">Загрузка данных...</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <>
          <ProductList products={productItemsList} />
          <ModalProduct />
        </>
      )}
    </div>
  );
};
