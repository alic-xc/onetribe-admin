import Layout from "../layouts/Layout";
import { lazy } from "react";
import Loadable from "../components/Loadable";
import ProtectedRoute from "../components/ProtectedRoute";

const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Index")));
const Orders = Loadable(lazy(() => import("../pages/Orders/Index")));
const OrderDetails = Loadable(lazy(() => import("../pages/Orders/Details")));
const Customers = Loadable(lazy(() => import("../pages/Customers/Index")));
const CustomerDetails = Loadable(
  lazy(() => import("../pages/Customers/Details"))
);
const Category = Loadable(lazy(() => import("../pages/Category/Index")));
const SubCategory = Loadable(
  lazy(() => import("../pages/Category/SubCategory"))
);
const Product = Loadable(lazy(() => import("../pages/Products/Index")));
const ProductDetails = Loadable(
  lazy(() => import("../pages/Products/Details"))
);
const CreateProduct = Loadable(lazy(() => import("../pages/Products/Create")));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          {" "}
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
          key: "dashboard",
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "order/:orderid",
          element: <OrderDetails />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "sub-category",
          element: <SubCategory />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "customer/:customerId",
          element: <CustomerDetails />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "product/create",
          element: <CreateProduct />,
        },
        {
          path: "product/:productId",
          element: <ProductDetails />,
        },
      ],
    },
  ],
};

export default MainRoutes;
