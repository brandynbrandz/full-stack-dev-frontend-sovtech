import { ViewIcon } from "@chakra-ui/icons";
import { Badge, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../../common/types";
import {
  PersonGridContainer,
  PersonGridInfo,
} from "./styles";

const PersonGrid: React.FC<{ person: Person }> = ({
  person,
}: {
  person: Person;
}) => {
  return (
    <PersonGridContainer>
      <PersonGridInfo>
        <Link to={`/person/${person.name && person.name}`}>
          <Image borderRadius="md" src="https://images.pexels.com/photos/9482212/pexels-photo-9482212.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&dpr=1" />
          <Text
            mt={2}
            fontSize="xl"
            textTransform="uppercase"
            fontWeight="bold"
            lineHeight="short"
          >
            {person.name}
          </Text>
          <Badge
            colorScheme={`${
              person.gender == "male"
                ? "blue"
                : person.gender === "female"
                ? "pink"
                : "green"
            }`}
          >
            {person.gender}
          </Badge>
          <Text ml={7} fontSize="sm" fontWeight="bold" color="red.800" as='u'>
            <ViewIcon ml={3}/>  Learn More
          </Text>
        </Link>
      </PersonGridInfo>
    </PersonGridContainer>
  );
};

export default PersonGrid;
