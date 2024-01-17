import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <StrictMode>
      <App />
      <Toaster/>
    </StrictMode>

  </BrowserRouter>
);
