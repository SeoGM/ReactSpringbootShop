import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직 추가 (예: API 호출)
    console.log('Username:', username);
    console.log('Password:', password);
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
