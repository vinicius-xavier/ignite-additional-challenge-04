import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#000000",
      "600": "#47585B",
      "500": "#616480",
      "400": "#999999",
      "300": "#DADADA",
      "200": "#F5F8FA",
      "100": "#FFFFFF",
    },
    yellow: {
      "500": "#FFBA08",
    },
    yellowAlpha: {
      "500": "#FFBA0880",
    },
    grayAlpha: {
      "500": "#99999980",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    mono: "Barlow, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.600",
      },
    },
  },
});
