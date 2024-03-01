import { lazy } from "react";
import Loadable from "../components/Loadable";

const Login = Loadable(lazy(() => import("../pages/Auth/Login")));

const MainRoutes = {
  path: "/",
  element: <Login />,
  children: [
    {
      path: "account/login",
      element: <Login />,
    },
  ],
};

export default MainRoutes;
