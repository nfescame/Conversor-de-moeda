import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Auth } from "./providers/auth";

// import App from "./App";

import Home from "./page/home";

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <Home />
    </Auth>
  </React.StrictMode>,
  document.getElementById("root")
);
