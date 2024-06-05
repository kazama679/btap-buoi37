import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute: React.FC = () => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  const userRole = sessionStorage.getItem('userRole');

  return isAuthenticated && userRole === 'admin' ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
