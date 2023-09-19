import React from "react";
import ReactDOM from "react-dom/client";

import "../src/styles/index.css";

import Router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
