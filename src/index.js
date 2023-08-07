import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FormDataContext } from "./context";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <FormDataContext>
      <App />
    </FormDataContext>
  </React.StrictMode>
);
