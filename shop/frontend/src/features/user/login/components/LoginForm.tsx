import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://8080-seogm-reactspringboots-n6p9ze8t2z8.ws-us115.gitpod.io/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            username: username,
            password: password,
          }),
        },
      );

      if (response.ok) {
        // 로그인 성공 시 로직 추가 (예: 토큰 저장, 리다이렉트)
        console.log('Login successful');
      } else {
        // 로그인 실패 시 로직 추가 (예: 에러 메시지 표시)
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
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
      <StyledButton onClick={handleLogin}>Login</StyledButton>
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
`;

export default LoginForm;
