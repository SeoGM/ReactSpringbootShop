import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { postData } from '@utils/api';
import { useDispatch } from 'react-redux';
import { login } from '@store/userSlice';
import { jwtDecode } from 'jwt-decode';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface DecodedToken {
  sub: string;
  role: string;
}

const loginUser = (data: LoginData): Promise<LoginResponse> =>
  postData('/api/auth/login', data);

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const decoded: DecodedToken = jwtDecode<DecodedToken>(data.token);

      console.log('Decoded JWT:', decoded);

      const email = decoded.sub;
      const { role } = decoded;

      if (email && role) {
        dispatch(login({ token: data.token, username: email, role }));
      } else {
        console.error(
          '디코딩된 토큰에 email 또는 role이 포함되어 있지 않습니다.',
        );
      }
    },
    onError: (error: Error) => {
      console.error('로그인 중 에러 발생:', error);
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
