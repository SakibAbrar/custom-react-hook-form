import { Flex, Stack } from '@chakra-ui/react';
import Form from './Form';
const App = () => {
  return (
    <Flex
      minH="calc(100vh - 80px)"
      backgroundColor="#f1f3f4"
      flexDirection="column"
      justifyContent="center"
    >
      <Stack flexDir="column" alignItems="center">
        <Form />
      </Stack>
    </Flex>
  );
};

export default App;
