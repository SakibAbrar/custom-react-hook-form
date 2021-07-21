import React from 'react';
import { useForm } from './custom-hook-form';

const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input name="firstname" {...register('firstname')} />
      <input name="lastname" {...register('lastname')} />
      <input type="submit" />
    </form>
  );
};

export default Form;
