import React from "react";
import PeopleGrid from "../../components/PeopleGrid";
import { GET_PEOPLE_QUERY, PEOPLE_COUNT } from "../../schemas";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaginationComp from "../../components/Pagination";
import Banner from "../../components/Banner";
import { Center, Container, Text } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    loading: loadingPagination,
    error: errorPagination,
    data: dataPagination,
  } = useQuery(PEOPLE_COUNT);
  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {
    variables: { pageNumber },
  });
  const characterLimit = 10;
  const increaseHandler = () => {
    if (
      pageNumber <
      (dataPagination &&
        Math.ceil(dataPagination.GetAllPeopleCount / characterLimit))
    ) {
      setPageNumber(pageNumber + 1);
    }
  };
  const reduceHandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <>
      
      <Banner />
      <Container maxW="container.xl" mt={10} mb={7}>
        {loading ? (
          <Center>Loading</Center>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
            {loadingPagination ? (
              <Center>Loading</Center>
            ) : errorPagination ? (
              <>Error: {console.log(errorPagination)}</>
            ) : (
              <Center>
                <Text
                  ml={2}
                  mb={3}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.800"
                >{`${dataPagination.GetAllPeopleCount} Characters found`}</Text>
              </Center>
            )}
            <PeopleGrid people={data.People} />
            {data.People.length === 0 && (
              <Center>
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                  color="red.800"
                >
                  No Characters found
                </Text>
              </Center>
            )}

            <PaginationComp
              page={pageNumber}
              maxPages={
                dataPagination &&
                Math.ceil(dataPagination.GetAllPeopleCount / 10)
              }
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
              />
              <Center >
                <Text>
                  {dataPagination &&
                    `Page ${pageNumber} of ${Math.ceil(
                      dataPagination.GetAllPeopleCount / characterLimit
                    )}`}
                </Text>
              </Center>
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
