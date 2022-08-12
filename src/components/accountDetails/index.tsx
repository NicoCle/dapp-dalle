import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { motion } from "framer-motion";

const AccountDetails: FC<IAccountDetails> = ({
  active,
  connect,
  disconnect,
  account,
  chain,
  ChainId,
}) => {
  const acc = `${account?.slice(0, 5)}...${account?.slice(-10)}`;

  return (
    <Flex
      as={motion.div}
      border={active ? "3px solid green" : "3px solid red"}
      boxShadow="dark-lg"
      bg={active ? "green.200" : "red.200"}
      padding="1rem"
      gap="1rem"
      direction="column"
      position="fixed"
      zIndex="10"
      top="1"
      right="1"
      opacity="0.2"
      _hover={{
        opacity: "1",
        transitionDuration: "0.5s",
      }}
      whileHover={{
        transitionDuration: "1s",
      }}
    >
      <Flex gap="1rem">
        <Button
          bg="green.200"
          disabled={active ? true : false}
          onClick={connect}
        >
          Connect
        </Button>
        <Button
          disabled={active ? false : true}
          bg="red.200"
          onClick={disconnect}
        >
          Disconnect
        </Button>
      </Flex>
      <Heading fontSize="sm">Cuenta: {active ? acc : ""}</Heading>
      <Heading fontSize="sm">Red: {chain}</Heading>
      <Heading fontSize="sm">ChainId: {ChainId}</Heading>
    </Flex>
  );
};

export default AccountDetails;
