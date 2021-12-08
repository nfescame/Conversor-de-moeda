import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProviders } from "./providers/index";

// import App from "./App";

import Home from "./page/home";

ReactDOM.render(
  <React.StrictMode>
    <AuthProviders>
      <Home />
    </AuthProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
