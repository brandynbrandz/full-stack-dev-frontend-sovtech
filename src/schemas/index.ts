import { gql, DocumentNode } from "@apollo/client";

export const GET_ALL_PEOPLE_QUERY: DocumentNode = gql`
  query getAllPeople($pageNumber: Int!) {
    People(pageNumber: $pageNumber) {
      count
      next
      previous
      results {
        name
        gender
        mass
        height
        homeworld
      }
    }
  }
`;

export const GET_PERSON_QUERY: DocumentNode = gql`
  query getPerson($name: String!, $pageNumber: Int!) {
    Person(searchName: $name, pageNumber: $pageNumber) {
      count
      next
      previous
      results {
        name
        gender
        mass
        height
        homeworld
      }
    }
  }
`;
