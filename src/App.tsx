import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./views/home";
import PersonDetailsPage from "./views/personDetails";
import GlobalStyle from "./common/styles/global";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import SearchPersonPage from "./views/searchPerson";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/search/:name" element={<SearchPersonPage />} />
          <Route path="/person/:name" element={<PersonDetailsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
