import styled from "styled-components";
export const PersonGridContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;
export const PersonGridInfo = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  padding: 20px 30px 30px;
`;

