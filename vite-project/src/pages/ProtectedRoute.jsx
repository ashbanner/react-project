import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const storedToken =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const isAuthenticated = !!storedToken;
  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
