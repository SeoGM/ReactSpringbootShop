import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { login } from '@store/userSlice';
import { jwtDecode } from 'jwt-decode';
import { postData } from '@utils/api';
import useForm from '@utils/useForm';
import Input from '@common/components/Input';

interface LoginData {
  email: string;
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
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const decoded: DecodedToken = jwtDecode<DecodedToken>(data.token);

      console.log('Decoded JWT:', decoded);

      const email = decoded.sub;
      const { role } = decoded;

      if (email && role) {
        dispatch(login({ token: data.token, email: email, role }));
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
    mutation.mutate({ email: values.email, password: values.password });
  };

  return (
    <FormContainer>
      <Input
        type="text"
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <Input
        type="password"
        label="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
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
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
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
