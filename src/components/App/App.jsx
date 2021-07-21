import React from "react";
import "../../state/stores/ProductsStore";

import "../../styles/default/style.scss";

import ProductList from "../productList";
import { Provider } from "react-redux";
import { store } from "../../state/redux/store";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <main className="main">
          <ProductList />
        </main>
      </Provider>
    );
  }
}
