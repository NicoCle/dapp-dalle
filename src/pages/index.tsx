import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import AccountDetails from "components/wallet";
import Card from "components/card";
import FormView from "components/form-view";
import Nav from "components/Nav";
import TitleContainer from "components/titleContainer";
import InputGenerate from "components/inputGenerate";
import useMock from "hook/useMock";
import useWallet from "hook/useWallet";
import useDalle from "hook/useDalle";

const HomePage: NextPage = () => {
  const { connect, disconnect, account, active, chain, isUnsupportedChain } =
    useWallet();
  const { setQuery } = useDalle();
  const { imgesList, src, openForm, handleGerenate } = useMock();

  return (
    <Flex
      w="100%"
      minH="100vh"
      direction="column"
      bg="orange.200"
      color="black"
      alignItems="center"
      justifyContent="space-around"
    >
      <Nav />
      <AccountDetails
        chain={chain?.[0]?.chain}
        isUnsupportedChain={isUnsupportedChain}
        active={active}
        connect={connect}
        disconnect={disconnect}
        account={account}
      />
      <TitleContainer />
      <InputGenerate setQuery={setQuery} handleGerenate={handleGerenate} />
      <Flex
        w="100%"
        minH="70vh"
        bg="blue.200"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
        p="1rem"
        wrap="wrap"
      >
        {imgesList.map((data: TData) => {
          return (
            <Card dalleData={data} key={data.id} handleFormView={openForm} />
          );
        })}
      </Flex>
      <FormView account={account} src={src} />
    </Flex>
  );
};

export default HomePage;
