import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

const initialState = {
  user: {
    currentUser: localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser")!)
      : {
          id: null,
          userPassword: "",
          userEmail: "",
        },
  },
};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState as any,
  composeWithDevTools(applyMiddleware(...middleware))
);
