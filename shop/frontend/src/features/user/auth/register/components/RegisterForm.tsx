import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { postData } from '@utils/api';
import useForm from '@utils/useForm';
import Input from '@common/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface RegisterData {
  email: string;
  password: string;
  name: string;
  contact: string;
  address: string;
  detailAddress: string;
}

const registerUser = (data: RegisterData) =>
  postData('/api/auth/register', data);

const RegisterForm = () => {
  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
    name: '',
    contact: '',
    address: '',
    detailAddress: '',
  });

  const [showDetailAddress, setShowDetailAddress] = useState(false);

  const openAddressSearch = () => {
    new (window as any).daum.Postcode({
      oncomplete: function (data: any) {
        setValues((prev) => ({
          ...prev,
          address: data.address,
        }));
        setShowDetailAddress(true);
      },
    }).open();
  };

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
    },
    onError: (error: Error) => {
      console.error('Registration failed:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(values);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <Input
        type="password"
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <Input
        type="text"
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Input
        type="text"
        label="Contact"
        name="contact"
        value={values.contact}
        onChange={handleChange}
        placeholder="Enter your contact"
      />

      <Input
        type="text"
        label="Address"
        name="address"
        value={values.address}
        onChange={handleChange}
        placeholder="Enter your address"
        readOnly
        buttonLabel={<FontAwesomeIcon icon={faSearch} />}
        onButtonClick={openAddressSearch}
      />

      {showDetailAddress && (
        <Input
          label=" "
          type="text"
          name="detailAddress"
          value={values.detailAddress}
          onChange={handleChange}
          placeholder="Enter your detail address (e.g., apt number)"
        />
      )}

      <StyledButton type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Registering...' : 'Register'}
      </StyledButton>
      {mutation.isError && (
        <ErrorMessage>
          Registration failed: {(mutation.error as Error).message}
        </ErrorMessage>
      )}
    </FormContainer>
  );
};

// Styled-components for the form
const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export default RegisterForm;
