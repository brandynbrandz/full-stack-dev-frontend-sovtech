import React from "react";
import { Person } from "../../types";
import PersonGrid from "../PersonGrid";
import { PeopleCardWrapper, PeopleGridContainer } from "./styles";

const PeopleGrid: React.FC<{ people: Person[] }> = ({
  people,
}: {
  people: Person[];
}) => {
  return (
    <PeopleCardWrapper>
      {people.map((data, key) => (        
          <PeopleGridContainer key={key}>
            <PersonGrid person={data} />
          </PeopleGridContainer>
      ))}
    </PeopleCardWrapper>
  );
};

export default PeopleGrid;
