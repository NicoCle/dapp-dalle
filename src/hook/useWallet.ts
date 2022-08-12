import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { connector } from "utils/init-web3-wallet";
import { fetcher } from "./useFetcher";

type TChain = {
  chain: string;
  chainId: number;
};
const useWallet = () => {
  const { activate, account, chainId, active, deactivate } = useWeb3React();
  const [chains, setChains] = useState<TChain[]>();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previuslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previuslyConnected");
  };

  const chain = chains?.filter((e: TChain) => e.chainId === chainId);

  useEffect(() => {
    if (localStorage.getItem("previuslyConnected") === "true") connect();
  }, [connect]);

  useEffect(() => {
    (async () => {
      const chainsFech = await fetcher("https://chainid.network/chains.json");
      return setChains(chainsFech);
    })();
  }, []);

  return {
    connect,
    disconnect,
    account,
    active,
    chainId,
    fetcher,
    chain,
  };
};

export default useWallet;
