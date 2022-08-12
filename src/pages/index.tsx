import { Button, Flex, Heading, Skeleton, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import AccountDetails from "components/accountDetails";
import Card from "components/card";
import FormView from "components/form-view";
import useMarket from "hook/useMarket";
import useWallet from "hook/useWallet";

const HomePage: NextPage = () => {
  const { connect, disconnect, account, active, chainId, chain } = useWallet();
  const { imgesList, src, closeForm, openForm, handleGerenate } = useMarket();

  return (
    <Flex
      w="100%"
      minH="100vh"
      direction="column"
      bg="black"
      color="blue.500"
      padding="5rem 2rem"
      alignItems="center"
      justifyContent="space-around"
    >
      <AccountDetails
        chain={chain?.[0]?.chain}
        ChainId={chainId}
        active={active}
        connect={connect}
        disconnect={disconnect}
        account={account}
      />
      <Heading fontSize="8xl" textAlign="center">
        Crea tu primer NFT
      </Heading>
      <Flex width="100%" justifyContent="center">
        <Flex
          boxSize="md"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Ingresar texto :</Heading>
          <Flex gap="1rem">
            <Input bg="white" />
            <Button colorScheme="pink" onClick={handleGerenate}>
              Generar
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="1rem"
        padding="1rem"
        borderRadius="lg"
        justifyContent="center"
        border="1px solid black"
        w="100%"
        minH="250px"
      >
        {imgesList.map((e: any) => {
          return <Card NFTe={e} key={e.id} handleFormView={openForm} />;
        })}
      </Flex>
      {src ? (
        <FormView account={account} src={src} closeForm={closeForm} />
      ) : null}
    </Flex>
  );
};

export default HomePage;
