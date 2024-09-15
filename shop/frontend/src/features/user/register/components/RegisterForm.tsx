import React from 'react';
import styled from 'styled-components';
import Input from '../../../../app/components/Input';
import useForm from '../../../../utils/useForm';

const RegisterForm = () => {
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // 회원가입 로직 추가 (예: API 호출)
    console.log('Name:', values.name);
    console.log('Email:', values.email);
    console.log('Password:', values.password);
  };

  return (
    <StyledForm onSubmit={handleRegister}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
      />
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RegisterForm;
