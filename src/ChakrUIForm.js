import React from 'react';
import { useForm } from './custom-hook-form';
import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Divider,
} from '@chakra-ui/react';

const Form = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'example@company.com',
      username: 'username',
      usertype: 'admin',
    },
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(submit)}
      minW="380px"
      spacing={4}
      pl={12}
      pr={12}
      pb={12}
      pt={8}
      backgroundColor="white"
      boxShadow="md"
      borderRadius="6px"
    >
      <Text color="#616161" textAlign="center" fontSize="3xl" fontWeight="bold">
        Welcome
      </Text>
      <FormControl isRequired>
        <FormLabel color="#ffa000">Email address</FormLabel>
        <Input
          {...register('email')}
          h="50px"
          type="email"
          color="#616161"
          bg="#f8f8f8"
          focusBorderColor="#616161"
          placeholder="Type your email"
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="#ffa000">Username</FormLabel>
        <Input
          {...register('username')}
          h="50px"
          type="text"
          color="#616161"
          bg="#f8f8f8"
          focusBorderColor="#616161"
          placeholder="Type your username"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="#ffa000">User Type</FormLabel>
        <Select
          {...register('usertype')}
          h="50px"
          type="text"
          color="#616161"
          bg="#f8f8f8"
          focusBorderColor="#616161"
          placeholder="Select option"
        >
          <option value="admin">Admin</option>
          <option value="professional">Professional</option>
          <option value="patient">Patient</option>
        </Select>
      </FormControl>
      <Divider />
      <Button
        type="submit"
        variant="solid"
        color="#424242"
        bg="#ff9800"
        _hover={{ color: '#757575', bg: '#ffe082' }}
      >
        Register
      </Button>
    </Stack>
  );
};

export default Form;
