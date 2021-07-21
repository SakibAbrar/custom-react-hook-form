import { useState } from 'react';

export const useForm = (param) => {
  const { defaultValues } = param || {};

  // holding every form fields inside one big fat state
  const [formState, setFormState] = useState({ ...defaultValues });

  // persists the event and makes changes to the piece of state accordingly
  const handleChange = (e) => {
    e.persist();
    setFormState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // this will return the onChange callback and the value which will be
  // attached inside any html input tag by object destructuring i.e. {...register('email)}
  const register = (name) => {
    return {
      name: name,
      value: formState[name] || defaultValues?.[name] || '',
      onChange: handleChange,
    };
  };

  // by currying I am receviing the submit callback event from user
  const handleSubmit = (submitCallback) => (e) => {
    e.preventDefault();
    submitCallback(formState);
  };

  // returning everything so the these can be found by using the useForm function
  return { register, handleSubmit, formState, handleChange };
};
