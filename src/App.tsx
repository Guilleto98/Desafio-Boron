import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import News from "./components/News/News";
import "./assets/fonts/fonts.css";
import Footer from "./components/Footer/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <News />
      <Footer />
    </Box>
  </ChakraProvider>
);
