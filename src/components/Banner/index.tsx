import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box>
        <Container maxWidth="container.xl">
            <Box>
                <Flex alignItems="center" py="20" flexDirection="row">
                    <Box>
                        <Heading>
                            <Box>Star Wars Characters Details </Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Get to know the Star Wars Characters and their details which include: Name, height, homeworld, mass
                        </Box>
                    </Box>
                    <Box width="100%"><Image w="100" src={"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=443.6&h=197.1&dpr=1"} alt="banner-img"></Image></Box>
                </Flex>
            </Box>
        </Container>    
    </Box>
  )
}

export default Banner