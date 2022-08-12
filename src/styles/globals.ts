import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        boxSizing: "border-box",
        textDecoration: "none",
      },
    },
  },
  fonts: {
    heading: `'Dosis', sans-serif`,
  },
});
