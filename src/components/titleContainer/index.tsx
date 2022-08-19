import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

const TitleContainer: FC = () => {
  return (
    <Flex
      bg="white"
      p="1rem 3rem"
      border="7px solid black"
      borderRadius="1rem"
      m="3rem 0"
    >
      <Heading fontSize="8xl" textAlign="center">
        Crea tu primer NFT
      </Heading>
    </Flex>
  );
};
export default TitleContainer;
