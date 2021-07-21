# Custom React Hook Form

This is a simple implementation of React Hook Form which I love using a lot.

## Getting started

Let's clone the project and run locally-

```bash
git clone git@github.com:SakibAbrar/custom-react-hook-form.git

#install dependencies
yarn

# start the server
yarn start
```

## Using the custom hook form

just import it from the `custom-hook-form.js` file like below. You don't need the whole project or chakra-ui for that. Just copy the `custom-hook-form.js` file on your existing project and use it after importing it. Register the input fields as below.

```javascript
import React from 'react';
import { useForm } from './custom-hook-form';

const DemoForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstname')} />
      <input {...register('lastname')} />
      <input type="submit" />
    </form>
  );
};

export default DemoForm;
```

## Using the custom hook form with default values

You can set some defaultvalues for the registered fields.

```javascript
const { register, handleSubmit } = useForm({
  defaultValues: {
    email: 'example@company.com',
    username: 'username',
    usertype: 'admin',
  },
});
```

If you have any suggestions regarding this custom implementation of react-hook-form feel free to drop an email on `sakib.cghs@gmail.com`
