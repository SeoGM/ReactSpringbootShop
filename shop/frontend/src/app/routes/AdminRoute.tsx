import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, role } = useAppSelector((state) => state.user);

  if (role === null || isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn || role !== '10') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
