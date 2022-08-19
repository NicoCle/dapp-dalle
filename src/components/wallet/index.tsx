import {
  Flex,
  Button,
  Tag,
  TagLabel,
  Badge,
  TagCloseButton,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";

const WalletData: FC<IWalletData> = ({
  account,
  active,
  disconnect,
  connect,
  isUnsupportedChain,
  chain,
}) => {
  const acc = `${account?.slice(0, 5)}...${account?.slice(-10)}`;

  return (
    <Flex alignItems="center" position="fixed" top="3" right="3">
      {active ? (
        <Tag colorScheme="green" borderRadius="full" size="lg">
          <TagLabel>
            <Link href="/punks">{acc}</Link>
          </TagLabel>
          <Badge variant="solid" fontSize="0.8rem" ml="1">
            ~ (red : {chain}) Ξ
          </Badge>
          <TagCloseButton onClick={disconnect} />
        </Tag>
      ) : (
        <Button
          variant="solid"
          colorScheme="green"
          size="sm"
          leftIcon={<BsFillBookmarkPlusFill />}
          onClick={connect}
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? "Red no soportada" : "Conectar wallet"}
        </Button>
      )}
    </Flex>
  );
};

export default WalletData;
