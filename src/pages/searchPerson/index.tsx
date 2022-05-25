import { useQuery } from "@apollo/client";
import { Badge, Box, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PeopleSkeleton from "../../components/LoadingSkeleton/PeopleSkeleton";
import PaginationComp from "../../components/Pagination";
import PeopleGrid from "../../components/PeopleGrid";
import { GET_PERSON_QUERY } from "../../schemas";

const SearchPersonPage = () => {
  const { name } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(GET_PERSON_QUERY, {
    variables: { name, pageNumber },
  });

  const characterLimit = 10;
  const increaseHandler = () => {
    if (
      pageNumber <
      (data &&
        Math.ceil(data.Person.count / characterLimit))
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
    <Box>
      <Center>
        <Badge mb={7}>Search Term ({name})</Badge>
      </Center>
      <Box>
        {loading ? (
          <Center><PeopleSkeleton/></Center>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
              <Center>
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.800"
                >{`${data && data.Person.count} Characters found`}</Text>
              </Center>

            <PeopleGrid people={data.Person.results} />
            {data.Person.results.length === 0 && (
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
                Math.ceil(
                  data.Person.count / characterLimit
                )
              }
              next={data && data.Person.next}
              previous={data && data.Person.previous}
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
            <Center mb={7}>
              <Text>
                {data && data.Person.results.length > 1 &&
                  `Page ${pageNumber} of ${Math.ceil(
                    data.Person.count / 10
                  )}`}
              </Text>
            </Center>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchPersonPage;
