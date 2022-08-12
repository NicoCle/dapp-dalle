import Web3Modal from "web3modal";
import { InjectedConnector } from "@web3-react/injected-connector";

export const getLibrary = (provider: any) => {
  return new Web3Modal(provider);
};

export const connector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
