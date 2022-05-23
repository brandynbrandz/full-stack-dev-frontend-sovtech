import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Container, Flex } from "@chakra-ui/react";

const SearchForm: React.FC = () => {
  let navigate = useNavigate();
  const handleSubmit = (values: any) => {
    navigate(`/search/${values.searchTerm}`);
  };
  return (
    <Container maxW="xl" mt={10}>
      <Flex justifyContent="center">
        <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              name="searchTerm"
              type="text"
              placeholder="Search a character"
              required
            />
            <Button type="submit">Search</Button>
          </Form>
        </Formik>
      </Flex>
    </Container>
  );
};

export default SearchForm;
