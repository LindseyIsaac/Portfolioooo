import React from "react";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { Logo } from "@choc-ui/logo";


const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header w="full">
          <Flex
            bg={["primary.100"]}
            color={["primary.300"]}
            alignItems="center"
            justifyContent="space-between"
            mx="auto"
            p="0.75rem"
          >
           
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing="1rem"
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
            <Button w="full" variant="ghost">
                   <Link to = "/start">Start</Link>
                 </Button>
            <Button w="full" variant="ghost">
                   <Link to = "/about">About Me</Link>
                 </Button>
           <Button w="full" variant="ghost">
                  <Link to = "/portfolio">Portfolio</Link>
                 </Button>
           <Button w="full" variant="ghost">
                   <Link to = "/contact">Contact</Link>
                 </Button>
           <Button w="full" variant="ghost">
                   <Link to = "/resume">Resume</Link>
                 </Button>
              </HStack>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
            <Button w="full" variant="ghost">
//                   <Link to = "/about">About Me</Link>
//                 </Button>
//           <Button w="full" variant="ghost">
//                  <Link to = "/portfolio">portfolio</Link>
//                 </Button>
//           <Button w="full" variant="ghost">
//                   <Link to = "/contact">Contact</Link>
//                 </Button>
//           <Button w="full" variant="ghost">
//                   <Link to = "/resume">Resume</Link>
//                 </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  export default Navbar;
// const navbar = () => {
// //   const bg = useColorModeValue("white", "gray.800");
// //   const mobileNav = useDisclosure();

//   return (
//     <React.Fragment>
//     <chakra.header
//       bg={bg}
//       w="full"
//       px={{ base: 2, sm: 4 }}
//       py={4}
//       shadow="md"
//       >
//         <Flex alignItems="center" justifyContent="space-between" mx="auto">

//           <HStack display="flex" alignItems="center" spacing={1}>
//             <HStack
//               spacing={1}
//               mr={1}
//               color="brand.500"
//               display={{ base: "none", md: "inline-flex" }}
//             >
//               <Button variant="ghost">about</Button>
//               <Button variant="ghost">portfolio</Button>
//               <Button variant="ghost">contact</Button>
//               <Button variant="ghost">resume</Button>
//             </HStack>
//             <Button colorScheme="brand" size="sm">
//               Get Started
//             </Button>
//             <Box display={{ base: "inline-flex", md: "none" }}>
//               <IconButton
//                 display={{ base: "flex", md: "none" }}
//                 aria-label="Open menu"
//                 fontSize="20px"
//                 color="gray.800"
//                 _dark={{ color: "inherit" }}
//                 variant="ghost"
//                 onClick={mobileNav.onOpen}
//               />

//               <VStack
//                 pos="absolute"
//                 top={0}
//                 left={0}
//                 right={0}
//                 display={mobileNav.isOpen ? "flex" : "none"}
//                 flexDirection="column"
//                 p={2}
//                 pb={4}
//                 m={2}
//                 // bg={bg}
//                 spacing={3}
//                 rounded="sm"
//                 shadow="sm"
//               >
//                 <CloseButton
//                   aria-label="Close menu"
//                   onClick={mobileNav.onClose}
//                 />

//                 <Button w="full" variant="ghost">
//                   <Link to = "/about">About Me</Link>
//                 </Button>
//                 <Button w="full" variant="ghost">
//                  <Link to = "/portfolio">portfolio</Link>
//                 </Button>
//                 <Button w="full" variant="ghost">
//                   <Link to = "/contact">Contact</Link>
//                 </Button>
//                 <Button w="full" variant="ghost">
//                   <Link to = "/resume">Resume</Link>
//                 </Button>
//               </VStack>
//             </Box>
//           </HStack>
//         </Flex>
//       </chakra.header>
//     </React.Fragment>
//   );
// };
// export default navbar;
