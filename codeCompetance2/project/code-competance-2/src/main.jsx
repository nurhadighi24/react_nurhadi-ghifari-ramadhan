import React from "react";
import ReactDOM from "react-dom/client";

import "../src/styles/index.css";
import LandingPage from "./pages/LandingPage.jsx";
import Routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
