import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { theme } from "styles/globals";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/init-web3-wallet";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
