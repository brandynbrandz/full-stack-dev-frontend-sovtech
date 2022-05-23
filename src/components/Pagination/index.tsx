import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styled, { css } from "styled-components";

interface Iprops {
  page: number;
  maxPages: number;
  onClickReducer: () => void;
  onClickIncreaser: () => void;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
}

const PaginationLine = styled("h1")<{ active: boolean }>`
padding: 8px 13px;
cursor: pointer;
border-radius: 10px;
${(props) =>
  props.active &&
  css`
    background: blue;
    color: white;
  `}
  &: hover {
    background: #edf2f7;
  }
}
`;

const PaginationComp: React.FC<Iprops> = (Props: Iprops) => {
  let pages = [];

  for (let _i = 1; _i <= Props.maxPages; _i++) {
    pages.push(_i);
  }

  return (
    <Container>
      <Box>
        <Flex justifyContent="center" p={2}>
          <Button onClick={Props.onClickReducer}>{<ChevronLeftIcon />}</Button>
          {pages.map((page, key) => (
            <PaginationLine
              key={key}
              onClick={() => Props.setPageNumber(page)}
              active={page === Props.pageNumber}
            >
              {page}
            </PaginationLine>
          ))}
          <Button onClick={Props.onClickIncreaser}>
            {<ChevronRightIcon />}
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default PaginationComp;
