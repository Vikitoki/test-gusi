import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

import "../../styles/default/style.scss";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrapper">
            <main className="main">
              <Switch>
                <Route path="/" exact component={HomePage}></Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
