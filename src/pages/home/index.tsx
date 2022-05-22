import React from "react";
import PeopleGrid from "../../components/PeopleGrid";
import { HomePageContainer } from "./styles";
import { GET_PEOPLE_QUERY, PEOPLE_COUNT } from "../../schemas";
import { useQuery } from "@apollo/client";
import SearchForm from "../../components/SearchForm";
import { useState } from "react";
import PaginationComp from "../../components/Pagination";
import Banner from "../../components/Banner";

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
  const characterLimit = 10
  const increaseHandler = () => {
    if (
      pageNumber <
      (dataPagination && Math.ceil(dataPagination.GetAllPeopleCount / characterLimit))
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
      <SearchForm />
      <Banner/>
      <HomePageContainer>
        {loading ? (
          <>Loading</>
        ) : error ? (
          <>Error: {console.log(error)}</>
        ) : (
          <>
            <PeopleGrid people={data.People} />
            {data.People.length === 0 && <h3>No Characters found</h3>}
            {loadingPagination ? (
              <>Loading</>
            ) : errorPagination ? (
              <>Error: {console.log(errorPagination)}</>
            ) : (
              <><h3>{`${dataPagination.GetAllPeopleCount} Characters`}</h3></>
            )}
            <h3>{`Page ${pageNumber} out of ${Math.ceil(dataPagination.GetAllPeopleCount / characterLimit)}`}</h3>
            <PaginationComp
              page={pageNumber}
              maxPages={
                dataPagination &&
                Math.ceil(dataPagination.GetAllPeopleCount / 10)
              }
              onClickIncreaser={increaseHandler}
              onClickReducer={reduceHandler}
              setPageNumber={setPageNumber}
            />
          </>
        )}
      </HomePageContainer>
    </>
  );
};

export default HomePage;
