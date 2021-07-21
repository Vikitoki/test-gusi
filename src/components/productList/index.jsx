import React from "react";
import { withStore } from "../../state/withStore";
import ModalProduct from "../Modals/ModalProduct";
import { Product } from "../product";
import "./product-list.scss";

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <ModalProduct />
      </>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
