import { Box, Container, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

const PersonDetailsSkeleton = () => {
  return (
    <Container>
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height="300px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" width="50%" />
      </Box>
    </Container>
  );
};

export default PersonDetailsSkeleton;
