import Layout from "../layouts/Layout";
import { lazy } from "react";
import Loadable from "../components/Loadable";

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Index")));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ],
};

export default MainRoutes;
