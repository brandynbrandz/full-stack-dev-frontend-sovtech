import React from 'react'
import {Box, Button,Heading,IconButton,Text, Flex,Spacer, useColorMode} from "@chakra-ui/react"
import CustomLink from '../../components/Shared/CustomLink'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const TestingHome = () => {
  const {colorMode ,toggleColorMode} = useColorMode()
  return (
    <Box>
      <Text fontSize="30px" color="red">
        Welcome to This edit
      </Text>
      <Heading as="h1">Heading 1</Heading>
      <Box as={Heading}>
          oooo        
      </Box>
      <Button>
        Hi
      </Button>
      <CustomLink ChakraComponent={Text} to={"/yeye"}>My link</CustomLink>

      <IconButton aria-label='ck'/>
      customs

    <ChevronLeftIcon/>
    <ChevronRightIcon/>
    <Box>
      <Spacer/>
      <IconButton icon={<ChevronLeftIcon/>} aria-label=""/>
      <IconButton icon={<ChevronRightIcon/>} aria-label=""/>
    </Box>
    <Box>
      <IconButton icon={colorMode === "dark"? <SunIcon/> : <MoonIcon/>} onClick={toggleColorMode} aria-label=""/>

    </Box>
    </Box>
  )
}

export default TestingHome