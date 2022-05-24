import { Container, Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

const PeopleSkeleton = () => {
  return (
    <Container>
      <Stack>
        <Skeleton height="20px" />
        <Flex gap="3em">
          <Skeleton mt={7} height="110px" width="100%" borderRadius="5" />
          <Skeleton mt={7} height="110px" width="100%" borderRadius="5" />
          <Skeleton mt={7} height="110px" width="100%" borderRadius="5" />
        </Flex>
        <Flex gap="3em">
          <SkeletonText mt={7} width="100%" borderRadius="5" />
          <SkeletonText mt={7} width="100%" borderRadius="5" />
          <SkeletonText mt={7} width="100%" borderRadius="5" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default PeopleSkeleton;
