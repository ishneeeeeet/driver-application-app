import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FormDataContext } from "./context";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <FormDataContext>
      <App />
    </FormDataContext>
  </React.StrictMode>
);
