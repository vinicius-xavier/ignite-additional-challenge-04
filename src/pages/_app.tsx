import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import * as C from "~/components";

import { theme } from "../styles/theme";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/swiper.sass";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <C.Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
