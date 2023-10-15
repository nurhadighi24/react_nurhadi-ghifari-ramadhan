import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "../src/styles/index.css";

import Router from "./routes/Routes.jsx";
import store from "./utils/redux/store/store";
import { TokenProvider } from "./utils/states/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TokenProvider>
      <Router />
    </TokenProvider>
  </Provider>
);
