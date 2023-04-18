import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/index";
import recipesMiddleware from "./middleware/recipesMiddleware";

import App from "./components/App";

const store = createStore(reducer, applyMiddleware(recipesMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
