import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { RootState } from '@store/store';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageContainer>
      <Title>Login Page</Title>
      <LoginForm />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export default LoginPage;
