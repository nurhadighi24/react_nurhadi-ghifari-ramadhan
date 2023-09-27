import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "../src/styles/index.css";

import Router from "./routes/Routes.jsx";
import store from "./utils/redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
