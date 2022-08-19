import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GiCube } from "react-icons/gi";

const Nav: FC = () => {
  return (
    <Flex
      w="100%"
      h="4.5rem"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      boxShadow="dark-lg"
    >
      <Flex>
        <Heading color="green.700">
          <GiCube />
        </Heading>
      </Flex>
      <Flex gap="1rem" w="10rem">
        <Text
          _hover={{
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Home
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Collection
        </Text>
      </Flex>
    </Flex>
  );
};

export default Nav;
