import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#64ffda",
    background: "#0a192f",
    text: "#ccd6f6",
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        background: "#0a192f",
        color: "#ccd6f6",
      },
    },
  },
});

export default theme;
