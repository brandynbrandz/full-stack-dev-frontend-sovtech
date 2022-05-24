import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
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
          <ModalHeader>
            <Flex justifyContent="center">
              <Formik
                initialValues={{ searchTerm: "" }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Flex alignItems="center">
                    <Field
                      name="searchTerm"
                      type="text"
                      placeholder="Search a character"
                      required
                    />

                    <Button type="submit" onClick={onClose}>
                      Search
                    </Button>
                  </Flex>
                </Form>
              </Formik>
            </Flex>
          </ModalHeader>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default SearchForm;
