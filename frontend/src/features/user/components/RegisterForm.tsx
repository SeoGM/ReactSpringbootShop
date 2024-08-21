import React from 'react';
import Input from '../../../components/Input';
import useForm from '../../../utils/useForm';

const RegisterForm = () => {
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    // 초기화는 필요 시 handleChange에서 초기화 가능
  };

  return (
    <form onSubmit={handleRegister} style={formStyle}>
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
