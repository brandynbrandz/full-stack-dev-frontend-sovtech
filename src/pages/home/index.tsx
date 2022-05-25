import React from "react";
import PeopleGrid from "../../components/PeopleGrid";
import { GET_ALL_PEOPLE_QUERY } from "../../schemas";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaginationComp from "../../components/Pagination";
import Banner from "../../components/Banner";
import { Center, Container, Text } from "@chakra-ui/react";
import PeopleSkeleton from "../../components/LoadingSkeleton/PeopleSkeleton";

const HomePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE_QUERY, {
    variables: { pageNumber },
  });
  const characterLimit = 10;
  const increaseHandler = () => {
    if (
      pageNumber <
      (data &&
        Math.ceil(data.People.count / characterLimit))
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
          <Center><PeopleSkeleton/></Center>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
 
              <Center>
                <Text
                  ml={2}
                  mb={3}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.800"
                >{`${data.People.count} Characters found`}</Text>
              </Center>
            <PeopleGrid people={data.People.results} />
            {data.People.results.length === 0 && (
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
                data &&
                Math.ceil(data.People.count / characterLimit)
              }
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
              next={data && data.People.next}
              previous={data && data.People.previous}
              />
              <Center >
                <Text>
                  {data &&
                    `Page ${pageNumber} of ${Math.ceil(
                      data.People.count / characterLimit
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
