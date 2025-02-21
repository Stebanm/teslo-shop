import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { SWRConfig } from "swr";

import { CssBaseline } from "@mui/material";

import { lightTheme } from "../themes";

import { UiProvider } from "../context";
import { CartProvider } from "../context/cart";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  );
}
