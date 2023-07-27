import "../public/main.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";


const { chains, publicClient } = configureChains(
  [polygon, polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "TASK",
  projectId: "Ya56214ab81786520af36bb406b33fba6",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
