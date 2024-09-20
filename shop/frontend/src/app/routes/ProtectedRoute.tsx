import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, role } = useAppSelector((state) => state.user);
	
  if (role === null || isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
