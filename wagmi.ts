import { configureChains, createConfig } from "wagmi";
import { arbitrumGoerli, polygonZkEvmTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumGoerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        // http: `https://rpc.public.zkevm-test.net`,
        http: `https://goerli-rollup.arbitrum.io/rpc`,
      }),
    }),
  ]
  // [alchemyProvider({ apiKey: 'jIMC_tE2sI1PWBNrN1l1KoykIYs_hAvC' })],
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export { chains };
