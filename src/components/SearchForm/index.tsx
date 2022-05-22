import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@chakra-ui/react";

const SearchForm: React.FC = () => {
  let navigate = useNavigate();
  const handleSubmit = (values: any) => {
    navigate(`/search/${values.searchTerm}`);
  };
  return (
    <Container maxW="xl" mt={10}>
      <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="searchTerm"
            type="text"
            placeholder="input text"
            required
          />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default SearchForm;
