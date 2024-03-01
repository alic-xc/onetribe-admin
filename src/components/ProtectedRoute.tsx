import React from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import OverlayCustomLoader from "./OverlayCustomLoader";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (!isAuthenticated && !loading) {
    navigate("/account/login?error=unauthenticated");
  }

  if (loading) {
    return <OverlayCustomLoader></OverlayCustomLoader>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
