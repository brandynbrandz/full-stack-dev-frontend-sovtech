import { gql, DocumentNode } from "@apollo/client";

export const GET_PEOPLE_QUERY: DocumentNode = gql`
  query getAllPeople($pageNumber: Int!) {
    People(pageNumber: $pageNumber) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const SEARCH_PERSON_QUERY: DocumentNode = gql`
  query searchPerson($name: String!, $pageNumber: Int!) {
    SearchPersonByName(searchName: $name, pageNumber: $pageNumber) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const PEOPLE_COUNT: DocumentNode = gql`
  query PeopleCount {
    GetAllPeopleCount
  }
`;

export const PERSON_SEARCH_COUNT: DocumentNode = gql`
  query SearchCount($name: String!) {
    GetSearchedPeopleCount(searchName: $name)
  }
`;

