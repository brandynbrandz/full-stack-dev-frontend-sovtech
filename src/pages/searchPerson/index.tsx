import { useQuery } from "@apollo/client";
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
  const characterLimit = 10
  const increaseHandler = () => {
    if (
      pageNumber <
      (dataPagination && Math.ceil(dataPagination.GetSearchedPeopleCount / characterLimit))
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
    <div>
      SearchPersonPage {name}
      <div>
        {loading ? (
          <>Loading</>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
            <PeopleGrid people={data.SearchPersonByName} />
            {data.SearchPersonByName.length === 0 && (
              <h3>No characters found</h3>
            )}
            {loadingPagination ? (
              <>Loading</>
            ) : errorPagination ? (
              <>Error: {console.log(errorPagination)}</>
            ) : (
              dataPagination.GetSearchedPeopleCount
            )}
            <h3>{dataPagination && `Page ${pageNumber} out of ${Math.ceil(
              dataPagination.GetSearchedPeopleCount / 10
            )}`}</h3>
            <PaginationComp
              page={pageNumber}
              maxPages={
                dataPagination &&
                Math.ceil(dataPagination.GetSearchedPeopleCount / characterLimit)
              }
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPersonPage;
