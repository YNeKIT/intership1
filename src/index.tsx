import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "macro-css";
import App from "./App";
import "./index.scss";
import "./";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mj4nvmwp.us.auth0.com"
    clientId="kgzc38wQjO2T59taC4E72cYx7QQgBCZi"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
