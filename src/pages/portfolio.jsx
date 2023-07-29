import React, { useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Portfolio(){
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
   };
// got rid of as const
  const slides = [
    {
      img: "https://github.com/MatthewMontiel/daja-limavi/raw/main/assets/images/DaJa-LiMaVi_inaction_screenshot.png",
      label: <Link to="https://matthewmontiel.github.io/daja-limavi/" target_blank> {""} Deployed Application </Link>,
      description: <Link to="https://github.com/MatthewMontiel/daja-limavi" target_blank> {""} GitHub </Link>, 
    },
    {
      img: "https://github.com/MatthewMontiel/ontheshelf/raw/main/Images/preview.png",
      label: <Link to="https://ontheshelf.herokuapp.com/" target_blank> {""} Deployed Application</Link>,
      description: <Link to="https://github.com/MatthewMontiel/ontheshelf" target_blank> {""} GitHub </Link>
    },
    {
      img: "data:image/jpeg;base64,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",
      label: <Link to="https://mysterious-tor-86894-5737c7df594a.herokuapp.com/" target_blank> {""} Deployed Application</Link>,
      description: <Link to="https://github.com/vrich88/cautious-journey" target_blank> {""} GitHub </Link>
    },
    {
      img: "https://github.com/LindseyIsaac/JavaQuiz/raw/main/assets/images/javashot.PNG",
      label: <Link to="https://lindseyisaac.github.io/JavaQuiz/" target_blank> {""} Deployed Application </Link>,
      description: <Link to="https://github.com/LindseyIsaac/JavaQuiz" target_blank> {""} GitHub </Link>
    },
    {
      img: "https://github.com/LindseyIsaac/Weather6/raw/main/assets/images/weathers.png",
      label: <Link to="https://lindseyisaac.github.io/Weather6/" target_blank> {""} Deployed Application </Link>,
      description: <Link to="https://github.com/LindseyIsaac/Weather6" target_blank> {""} GitHub </Link>
    },
    {
      img: "https://github.com/LindseyIsaac/Portfolio/raw/main/Assets/images/port.png", 
      label: <Link to="https://lindseyisaac.github.io/Portfolio/" target_blank> {""} Deployed Application </Link>,
      description: <Link to = "https://github.com/LindseyIsaac/Portfolio" target_blank> {""} "GitHub" </Link>
    },
  ];
/* <Link to= target_blank> {""} </Link> */
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  //:number go byebye
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      bg="#D9ACF5"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="1px"
                textAlign="left"
                w="full"
                mb="8"
                // changes slides text color 
                color="white"
                fontWeight="bold"
                textShadowColor= "Yellow"
                >
                <Text fontSize="4xl">{slide.label} </Text>
                
                <Text fontSize="2xl">{slide.description}</Text>
                
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
