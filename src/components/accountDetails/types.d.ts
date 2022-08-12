interface IAccountDetails {
  active: boolean;
  connect: () => void;
  disconnect: () => void;
  account: string | null | undefined;
  chain: string | undefined;
  ChainId: number | undefined;
}
