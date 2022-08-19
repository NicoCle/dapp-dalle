interface IWalletData {
  account: string | null | undefined;
  active: boolean;
  disconnect: () => void;
  connect: () => void;
  isUnsupportedChain: boolean;
  chain: string | undefined;
}
