import { Outlet, Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/session";

const ProtectedRoute = () => {
  const location = useLocation();
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export default ProtectedRoute;
