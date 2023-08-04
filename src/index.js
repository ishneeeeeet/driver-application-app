import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FormDataContext } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <FormDataContext>
      <App />
    </FormDataContext>
  </React.StrictMode>,
  document.getElementById("root")
);
