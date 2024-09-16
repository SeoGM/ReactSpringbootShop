import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/store/hooks'; // Redux 상태 조회용 커스텀 훅
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  // Redux 상태에서 토큰 가져오기 (또는 localStorage 사용 가능)
  const token = useAppSelector((state) => state.user.token);

  // 토큰이 있으면 홈으로 리다이렉트
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
