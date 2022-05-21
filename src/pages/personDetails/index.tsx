import React from "react";
import { PersonPageContainer } from "./styles";
import { SEARCH_PERSON_QUERY } from "../../schemas";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Person } from "../../common/types";
import { useState } from "react";

const PersonDetailsPage: React.FC = () => {
  const { name } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data } = useQuery(SEARCH_PERSON_QUERY, {
    variables: { name, pageNumber },
  });
  const navigate = useNavigate();
  console.log(data);

  return (
    <>
      <PersonPageContainer>
        <div>
          <button className="btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
        <>
          {loading ? (
            <>Loading</>
          ) : error ? (
            <>Error: {console.log(error)}</>
          ) : (
            data.SearchPersonByName.map((person: Person, key: number) => (
              <div key={key}>
                <div>Name {person.name}</div>
                <div>Height {person.height}</div>
                <div>Mass {person.mass}</div>
                <div>Gender {person.gender}</div>
                <div>Homeworld {person.homeworld}</div>
              </div>
            ))
          )}
        </>
      </PersonPageContainer>
    </>
  );
};

export default PersonDetailsPage;
