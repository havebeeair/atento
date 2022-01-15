import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./resources/fonts/Omnes-Bold.otf"
import "./resources/fonts/Omnes-Regular.otf"

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
