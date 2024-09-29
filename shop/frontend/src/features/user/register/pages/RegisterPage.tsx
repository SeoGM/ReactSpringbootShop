import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <PageContainer>
      <Title>Register</Title>
      <RegisterForm />
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

export default RegisterPage;
