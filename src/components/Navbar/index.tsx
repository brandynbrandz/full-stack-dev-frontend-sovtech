import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import Logo from "../../assets/starwarslogo.png";
import SearchForm from "../SearchForm";
const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <Box>
        <Flex alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
            <NavLink to={"/"}>
              <Image boxSize="90px" src={Logo} alt="logo" />
            </NavLink>
          </Box>
          <Box>
            <Flex>
              <SearchForm />

              <IconButton
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
                aria-label=""
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
  );
};

export default Navbar;
