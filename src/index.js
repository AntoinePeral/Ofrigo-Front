import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/index";
import ingredientsMiddleware from "./middleware/ingredientsMiddleware";
import tagsMiddleware from "./middleware/tagsMiddleware";
import thunk from "redux-thunk";

import App from "./components/App";

const store = createStore(
  reducer,
  applyMiddleware(ingredientsMiddleware, tagsMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
