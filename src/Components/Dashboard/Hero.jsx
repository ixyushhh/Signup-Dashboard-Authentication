import React from 'react'
import Sidenav from './Sidenav'
import Midtopnav from './Midtopnav'
import Midsection from './Midsection'
import Topleftsection from './Topleftsection'
import { Box, Flex } from '@chakra-ui/react'


const Hero = () => {
  return (
    <Flex bg={'#F5F5F5'}>
      <Box display={{
        base: "none",
        lg: "flex",
      }}
        position={'fixed'}
        top={'0'}
        left={'0'}
      >
        <Sidenav />
      </Box>

      <Box width={'100%'}>
        <Box position={'fixed'} ml={'20rem'} zIndex={'1'}><Midtopnav /></Box>
        <Box position={'relative'} marginLeft={'20rem'} mr={'20rem'} mt={'6rem'}><Midsection /></Box>
      </Box>


      <Box position={'fixed'}
        right={'0'}>
        <Topleftsection />
      </Box>
    </Flex>
  )
}

export default Hero