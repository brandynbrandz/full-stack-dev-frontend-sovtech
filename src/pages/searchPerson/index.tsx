import { useQuery } from "@apollo/client";
import { Badge, Box, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PaginationComp from "../../components/Pagination";
import PeopleGrid from "../../components/PeopleGrid";
import { PERSON_SEARCH_COUNT, SEARCH_PERSON_QUERY } from "../../schemas";

const SearchPersonPage = () => {
  const { name } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(SEARCH_PERSON_QUERY, {
    variables: { name, pageNumber },
  });
  const {
    loading: loadingPagination,
    error: errorPagination,
    data: dataPagination,
  } = useQuery(PERSON_SEARCH_COUNT, {
    variables: { name },
  });
  const characterLimit = 10;
  const increaseHandler = () => {
    if (
      pageNumber <
      (dataPagination &&
        Math.ceil(dataPagination.GetSearchedPeopleCount / characterLimit))
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
        <Badge>Search Term ({name})</Badge>
      </Center>
      <Box>
        {loading ? (
          <Center>Loading</Center>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
            {loadingPagination ? (
              <>Loading</>
            ) : errorPagination ? (
              <>Error: {console.log(errorPagination)}</>
            ) : (
              <Center>
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="xl"
                  fontWeight="bold"
                  color="green.800"
                >{`${dataPagination.GetSearchedPeopleCount} Characters found`}</Text>
              </Center>
            )}
            <PeopleGrid people={data.SearchPersonByName} />
            {data.SearchPersonByName.length === 0 && (
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
                Math.ceil(
                  dataPagination.GetSearchedPeopleCount / characterLimit
                )
              }
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
            <Center mb={7}>
              <Text>
                {dataPagination && data.SearchPersonByName.length > 1 &&
                  `Page ${pageNumber} of ${Math.ceil(
                    dataPagination.GetSearchedPeopleCount / 10
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
