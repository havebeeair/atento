import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
