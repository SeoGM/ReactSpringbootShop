import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string; // 추가된 부분
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div style={inputGroupStyle}>
      <label>{label}</label>
      <input
        type={type}
        name={name} // 추가된 부분
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

const inputGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

export default Input;
