import React from "react";
import { NavContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { Box, Button, Flex, IconButton, Image, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Logo from "../../assets/starwarslogo.png";
const Navbar: React.FC = () => {
  const {colorMode ,toggleColorMode} = useColorMode()

  return (
    <NavContainer>
      <Box>
        <Flex alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
          <NavLink to={"/"}><Image boxSize="90px" src={Logo} alt="logo" /></NavLink>
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              <NavLink to={"/person"}>About</NavLink>
            </Button>{" "}
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
            <IconButton icon={colorMode === "dark"? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode} aria-label=""/>
            </Button>
          </Box>
        </Flex>
      </Box>
    </NavContainer>
  );
};

export default Navbar;
