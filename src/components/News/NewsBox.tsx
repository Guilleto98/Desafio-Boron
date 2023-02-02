import { Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import BackImages from "./BackImages";

import PlusIcon from "./PlusIcon";

interface Props {
  title: string;
  description: string;
  color: string;
  backgroundPhoto: string;
}
const NewsBox = ({ title, description, color, backgroundPhoto }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <GridItem
      bg={isHovered ? "transparent" : color}
      h={{ base: "249px", lg: "478px" }}
      flexDir="column"
      px={{ base: "20px", lg: "40px" }}
      py={{ base: "29px", lg: "57px" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      position="relative"
      maxW={{ base: "249px", md: "249px", lg: "429px" }}
    >
      {isHovered && (
        <BackImages backgroundFill={color} photo={backgroundPhoto} />
      )}
      <Flex
        flexDir={"column"}
        h="full"
        justifyContent={isHovered ? "end" : "space-between"}
      >
        {!isHovered && (
          <Flex justifyContent="space-between">
            <Heading
              textAlign="left"
              fontFamily="OpenSans-bold"
              fontSize={{ base: "12px", lg: "20px" }}
              textTransform="uppercase"
            >
              {title}
            </Heading>
            <PlusIcon />
          </Flex>
        )}
        <Text
          alignSelf={"flex-end"}
          textAlign="left"
          fontFamily="OpenSans-semi"
          fontSize={{ base: "14px", lg: "24px" }}
          zIndex="1"
        >
          {description}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default NewsBox;
