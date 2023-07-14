import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { name, email, message });
    // Resets the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box maxWidth="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
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
    </Box>
  );
};

export default ContactForm;

// import React from "react";
// // import{Heading}from"@chakra-ui/react"

// function Contact() {
//   return (
//     <div>
//       Hey guys! I'm a Contact!
//      Name and stuff
//     </div>
//   );
// }

// export default Contact;


// // chakra has its own h1