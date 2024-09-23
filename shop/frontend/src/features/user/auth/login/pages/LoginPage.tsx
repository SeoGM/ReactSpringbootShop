import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const isLoggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
