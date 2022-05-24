import React from "react";
import { SEARCH_PERSON_QUERY } from "../../schemas";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Person } from "../../common/types";
import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PersonDetailsSkeleton from "../../components/LoadingSkeleton/PersonDetailsSkeleton";

const PersonDetailsPage: React.FC = () => {
  const { name } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(SEARCH_PERSON_QUERY, {
    variables: { name, pageNumber },
  });
  const navigate = useNavigate();

  return (
    <>
      <Container maxW="container.xl" mt={10} mb={7}>
        <Center>
          {loading ? (
            <><PersonDetailsSkeleton/></>
          ) : error ? (
            <>Error: {console.log(error)}</>
          ) : (
            data.SearchPersonByName.map((person: Person, key: number) => (
              <Box
                p="10"
                maxW="60%"
                borderRadius="5%"
                borderWidth="2px"
                key={key}
              >
                <Button mb={4} onClick={() => navigate(-1)}>
                  <ArrowBackIcon /> Go Back
                </Button>
                <Image borderRadius="md" src="https://images.pexels.com/photos/7499839/pexels-photo-7499839.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1200&w=750" />
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Name: {person.name}
                </Text>
                <Flex>
                  <Text ml={2} fontWeight="semibold">
                    Height
                  </Text>
                  <Text>
                    :{"  "}
                    {`${person.height && person.height} cm`}
                  </Text>
                </Flex>
                <Flex>
                  <Text ml={2} fontWeight="semibold">
                    Mass
                  </Text>
                  <Text>
                    :{"  "}
                    {`${person.mass && person.mass} kg`}
                  </Text>
                </Flex>
                <Text ml={2} fontWeight="semibold">
                  Gender:{" "}
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
                </Text>
                <Flex>
                  <Text fontWeight="semibold" ml={2}>
                    Homeworld
                  </Text>
                  <Text>
                    :{"  "}
                    {person.homeworld}
                  </Text>
                </Flex>
              </Box>
            ))
          )}
        </Center>
      </Container>
    </>
  );
};

export default PersonDetailsPage;
