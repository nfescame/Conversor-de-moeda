import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProviders } from "./providers/index";

// import App from "./App";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProviders>
      <App />
    </AuthProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
