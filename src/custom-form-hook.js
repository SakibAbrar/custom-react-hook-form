import { useState } from 'react';

export const useForm = () => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    e.persist();
    setFormState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return { formState, handleChange };
};
