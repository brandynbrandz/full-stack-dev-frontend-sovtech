import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../../common/types";
import { PersonGridContainer, PersonGridInfo, PersonGridParagraph } from "./styles";

const PersonGrid: React.FC<{ person: Person }> = ({
  person,
}: {
  person: Person;
}) => {
  return (
    <PersonGridContainer>
      <PersonGridInfo>
      <Link to={`/person/${person.name && person.name}`}>
        <PersonGridParagraph>{person.name}</PersonGridParagraph>
        <PersonGridParagraph>{person.gender}</PersonGridParagraph>
        <PersonGridParagraph>{person.height}</PersonGridParagraph>
        <PersonGridParagraph>{person.mass}</PersonGridParagraph>
        <PersonGridParagraph>{person.homeworld}</PersonGridParagraph>
      </Link>
      </PersonGridInfo>
    </PersonGridContainer>
  );
};

export default PersonGrid;
