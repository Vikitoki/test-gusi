import React from "react";
import { FC } from "react";
import { IActiveProductItem } from "../../types/productsTypes";
import { ProductItem } from "../ProductItem/ProductItem";

import "./ProductList.scss";

interface ProductListProps {
  products: IActiveProductItem[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <div className="product-list">
        {products.length !== 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
