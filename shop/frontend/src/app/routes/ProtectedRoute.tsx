import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
