import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/store/hooks';
import { RootState } from '../../../../../app/store/store';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const token = useAppSelector((state: RootState) => state.user.token);

  if (token) {
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
