import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, role } = useAppSelector((state) => state.user);

  if (!isLoggedIn || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
