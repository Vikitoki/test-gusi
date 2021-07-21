import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

import "../../styles/default/style.scss";
import { Header } from "../Header/Header";
import { CartPage } from "../../pages/CartPage/CartPage";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/cart" exact component={CartPage}></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
