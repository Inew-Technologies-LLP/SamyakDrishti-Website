import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated in LocalStorage
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  if (!isAuthenticated) {
    // If not logged in, redirect them to the login page
    return <Navigate to="/admin" replace />;
  }

  // If they are logged in, show the Dashboard
  return children;
};

export default ProtectedRoute;