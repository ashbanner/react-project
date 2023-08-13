import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteForLogin = ({ component: Component, ...props }) => {
  const storedToken =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const isAuthenticated = !!storedToken;
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return <Component {...props} />;
  }
};

export default ProtectedRouteForLogin;
