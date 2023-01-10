import { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default memo(ProtectRoutes);
