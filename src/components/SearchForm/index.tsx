import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const SearchForm: React.FC = () => {
  let navigate = useNavigate();
  const handleSubmit = (values: any) => {
    navigate(`/search/${values.searchTerm}`);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="xl">   
      <Button onClick={onOpen}>Search</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <Flex justifyContent="center">
        <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSubmit}>
          <Form>
            <Flex alignItems="center">

            <FormControl>
              <Field
                name="searchTerm"
                type="text"
                placeholder="Search a character"
                required
                />
            </FormControl>
            <Button type="submit" onClick={onClose}>Search</Button>
                </Flex>
          </Form>
        </Formik>
      </Flex>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default SearchForm;
