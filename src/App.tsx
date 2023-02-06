import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import News from "./components/News/News";
import "./assets/fonts/fonts.css";
import Footer from "./components/Footer/Footer";
import Repo from "./components/Repo/Repo";
import TwContainer from "./components/TwContainer/TwContainer";
import FocusingContainer from "./components/FocusingContainer/FocusingContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Slide from "./components/Slide/Slide";
import Welcome from "./components/Welcome/Welcome";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Welcome/>
      <Slide/>
      <AboutUs/>
      <FocusingContainer/>
      <TwContainer/>
      <Repo/>
      <News />
      <Footer />
    </Box>
  </ChakraProvider>
);
