import styled from "styled-components";
export const PeopleGridContainer = styled.div`
  margin-bottom: 24px;
  width: 30%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const PeopleCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
`;
