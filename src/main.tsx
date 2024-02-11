import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeCustomProvider } from "ontribe-admin-storybook";
import Routes from "./routers";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeCustomProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeCustomProvider>
  </React.StrictMode>
);
