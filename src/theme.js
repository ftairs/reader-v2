import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  colors: {
    brand: {
      main: "#fc5603",
    },
  },
  styles: {
    global: {
      "#js-view p": {
        marginBottom: "4%",
      },
      "#js-view *:first-child": {
        display: "none",
      },
    },
  },
});
