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
      img: "https://w0.peakpx.com/wallpaper/775/909/HD-wallpaper-joker-ha-ha-ha-ha-ha-ha-hahaha-ja-ja-ja-joker-ha-ha-ha.jpg",
      label: "Project 3",
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
