import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  return useRoutes([AuthRoutes, MainRoutes]);
};

export default Routes;
