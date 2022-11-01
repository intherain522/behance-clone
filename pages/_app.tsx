import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "../styles/GlobalStyle";
import Common from "styles/Common";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Common />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
