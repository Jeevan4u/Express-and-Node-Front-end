import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
}
