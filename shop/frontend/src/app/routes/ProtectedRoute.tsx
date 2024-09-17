import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  
  const token = useAppSelector((state) => {
    console.log("state:", state);
    return state.user.token}
  );

  if (!token) {
    // return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
