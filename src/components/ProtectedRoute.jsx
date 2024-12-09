import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); // Retrieve user and loading states
  const location = useLocation();

  if (loading) {
    // Display a loading screen while user authentication status is being determined
    return <div>Loading...</div>;
  }

  return user ? (
    children // Allow access to the protected route
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
