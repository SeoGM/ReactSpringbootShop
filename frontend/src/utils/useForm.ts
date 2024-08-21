import { useState, ChangeEvent } from 'react';

const useForm = <T extends Record<string, string>>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};

export default useForm;
