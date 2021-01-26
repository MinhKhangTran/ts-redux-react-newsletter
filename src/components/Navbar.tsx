import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex>
      <Box fontWeight="semibold" mr={8}>
        <Link to="/">Home</Link>
      </Box>
      <Box fontWeight="semibold">
        <Link to="/contact">Contact</Link>
      </Box>
    </Flex>
  );
};
export default Navbar;
