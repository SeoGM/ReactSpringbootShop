import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div style={pageStyle}>
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

const pageStyle = {
  padding: '20px',
  textAlign: 'center' as const,
};

export default RegisterPage;
