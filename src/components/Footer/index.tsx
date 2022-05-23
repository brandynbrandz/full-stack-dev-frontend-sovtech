import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import SearchForm from "../SearchForm";

const Footer: React.FC = () => {
  return (
    <Box mt={5} color="#ffffff" background="#212121" py="10">
      <Container maxWidth="container.xl">
        <Box display="flex" alignItems="center">
          <Heading size="md">Discover your favorite Character</Heading>
          <SearchForm />
        </Box>

        <Divider my="10" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>Star Wars @ sovtech</Box>
          <Box>By Brandyn</Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
