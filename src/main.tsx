import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeCustomProvider } from "ontribe-admin-storybook";
import Routes from "./routers";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { UserProvider } from "./contexts/UserContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <ThemeCustomProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeCustomProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
