import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../../../../utils/api';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const loginUser = (data: LoginData): Promise<LoginResponse> =>
  postData('/api/auth/login', data);

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log('Login successful, token:', data.token);
      localStorage.setItem('jwtToken', data.token);
    },
    onError: (error: Error) => {
      console.error('Error during login:', error);
    },
  });

  const handleLogin = () => {
    mutation.mutate({ username, password });
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <StyledButton onClick={handleLogin} disabled={mutation.isPending}>
        {mutation.isPending ? 'Logging in...' : 'Login'}
      </StyledButton>
      {mutation.isError && (
        <ErrorMessage>{(mutation.error as Error).message}</ErrorMessage>
      )}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export default LoginForm;
