import React, { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';

interface InputProps {
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  buttonLabel?: ReactNode;
  onButtonClick?: () => void; // 인자를 받지 않는 함수
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  readOnly,
  disabled,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <InputGroup>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
        {buttonLabel && onButtonClick && (
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              onButtonClick();
            }}
            disabled={disabled}
          >
            {buttonLabel}
          </StyledButton>
        )}
      </InputWrapper>
    </InputGroup>
  );
};

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  min-width: 100px;
  margin-right: 10px;
  color: #333;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

export default Input;
