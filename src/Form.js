import React, { useState } from 'react';
import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
const Form = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username });
  };
  return (
    <Stack
      as="form"
      onSubmit={handleSubmit}
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
      <FormControl id="email" isRequired>
        <FormLabel color="#ffa000">Email address</FormLabel>
        <Input
          value={email}
          onChange={handleEmailChange}
          h="50px"
          type="email"
          bg="#f8f8f8"
          focusBorderColor="#616161"
          placeholder="Type your email"
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel color="#ffa000">Username</FormLabel>
        <Input
          value={username}
          onChange={handleUsernameChange}
          h="50px"
          type="text"
          bg="#f8f8f8"
          focusBorderColor="#616161"
          placeholder="Type your username"
        />
      </FormControl>
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
