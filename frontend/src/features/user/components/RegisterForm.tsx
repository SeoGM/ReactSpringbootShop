import React, { useState } from 'react';
import Input from '../../../components/Input';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // 회원가입 로직 추가 (예: API 호출)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // 초기화
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleRegister} style={formStyle}>
      <Input 
        label="Name" 
        type="text" 
        value={name} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <Input 
        label="Email" 
        type="email" 
        value={email} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
        placeholder="Enter your email"
      />
      <Input 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
        placeholder="Enter your password"
      />
      <Input 
        label="Confirm Password" 
        type="password" 
        value={confirmPassword} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} 
        placeholder="Confirm your password"
      />
      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default RegisterForm;
