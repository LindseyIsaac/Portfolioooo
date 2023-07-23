import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // You can access the form values: name, email, message
    console.log('Form submitted:', { name, email, message });

    // Resets the form
    setName('');
    setEmail('');
    setMessage('');
    setEmailError('');
  };

  const validateEmail = (email) => {
    // Regular expression for email validation had help
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <Flex
      bg="black"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      >

    <Box maxWidth="400px" mx="auto">
    <Text
      color="#C689C6"
      fontSize="xs"
    >
      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isInvalid={emailError}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>

        <FormControl mb={4} isInvalid={emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            placeholder="Enter your email"
          />
          <FormErrorMessage>{emailError}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </FormControl>

        <Button type="submit" colorScheme="purple" mt={4}>
          Submit
        </Button>
      </form>
      </Text>
    </Box>
    
    </Flex>
  );
};

export default ContactForm;