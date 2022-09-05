
import useInView from 'react-cool-inview'
import Container from '../components/Container'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Image,
  Input,
  Heading,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';


const Personalsite = () => {
    return (
        <Container>
            <Box>
            <div className='h-52 w-20% relative'>
                <Image
                src='../../public/images/sitelight.png'
                alt='mysite'
            
                height="150"
                width="240"  
                >
                </Image>
                </div>
            </Box>

        </Container>
    )
}

export default Personalsite;