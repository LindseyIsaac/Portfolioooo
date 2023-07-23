import React from "react";
import { Box, Flex, Icon, Image, chakra } from "@chakra-ui/react";
import images  from "../assets/images/mee.jpg";
import { MdEmail, MdLocationOn, MdStar } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import About from "./about";
export default function Contact(){
  return (
    <Flex
      bg="#A267AC"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xl"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
        rounded="xl"
        overflow="hidden"
      >
        <Image
        // makes it smaller or larger to the container but it will fit
          w="full"
          // larger numbers make it smaller
          h= { 56 }
          boxSize ='600px'
          fit="cover"
          objectPosition="center"
          src= { images }
          alt="Picofme"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdStar} h={6} w={6} color="orange" />

          <chakra.h1 mx={3} color="pink" fontWeight="bold" fontSize="xl">
            ZEN
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
           
          >
            Lindsey Isaac
          </chakra.h1>
          <Flex
            alignItems="center"
            mt={4}
            color="pink.700"
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Junior Developer
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cedar Park, Texas
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              isaaclindsey89@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
      <About/>
    </Flex>

  );
};



