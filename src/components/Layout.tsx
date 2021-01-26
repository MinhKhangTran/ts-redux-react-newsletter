import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bgGradient="linear(to-b,orange.100,orange.300)">
      <Box w="95%" mx="auto">
        <Navbar />
      </Box>
      <Box w="85%" mx="auto">
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
export default Layout;
