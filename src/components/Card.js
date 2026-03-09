import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
      align="start"
      spacing={0}
    >
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="240px"
        objectFit="cover"
      />

      <VStack align="start" spacing={3} p={5}>
        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text color="gray.600">
          {description}
        </Text>

        <HStack spacing={2}>
          <Text fontWeight="semibold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
