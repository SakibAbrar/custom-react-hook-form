import { useState } from 'react';

export const useForm = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    e.persist();
    setFormState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const register = (name) => {
    return { onChange: handleChange, value: formState[name] || '' };
  };
  return { register, formState, handleChange };
};
