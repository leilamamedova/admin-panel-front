import React from "react";

import App from "App";
import ReactDOM from "react-dom/client";

import { Wrapper } from "components/wrappers/Wrapper";

import "assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
);
