import React from 'react'
import { Formik, Field, Form } from "formik";
import { useNavigate } from 'react-router-dom';


const SearchForm:React.FC = () => {

    let navigate = useNavigate()
    const handleSubmit = (values:any) => {
        navigate(`/search/${values.searchTerm}`)
    }
  return (
    <Formik initialValues={{searchTerm:""}} onSubmit={handleSubmit}>
        <Form>
            <Field name="searchTerm" type="text" placeholder="input text" required/>
            <button type="submit">Search</button>
        </Form>
    </Formik>
  )
}

export default SearchForm