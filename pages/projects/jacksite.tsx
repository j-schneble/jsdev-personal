import useInView from 'react-cool-inview'
import Container from '../../components/Container'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Image,
  Input,
  Heading,
  Flex,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {MdWorkspacesOutline } from 'react-icons/md'

const Jacksite = () => {
    return (
        <Container >
            <div className='px-2 py-2 bg-black rounded-md shadow-md shadow-gray-400/75'>
            <Box >
                <div className='flex flex-col gap-2'>
                <Heading className="text-3xl font-extrabold leading-none tracking-wider text-white font-sfprodisplaybold sm:text-2xl xl:text-1xl">
                    Tallowhill Home Services
                </Heading>
                <div className='flex flex-col gap-3 '>            
                <p className='flex flex-col indent-0.5  mb-6 text-left text-md  font-sfprodisplaylight  text-gray-100'>
                    A handyman / home improvement site.
                </p>             
                </div>               
          </div>
         
        <div className="grid grid-cols-2 gap-2">
        
       
            <div className=" Tilt">
        <Image 
              src='/images/th/th0000.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-200" 
              alt='mysite'       
                />        
         </div>
          <div className=" Tilt" >
        <Image 
              src='/images/th/th000.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-200" 
              alt='mysite'       
                />        
          </div>
          <div className=" Tilt" >
        <Image 
              src='/images/th/th00.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-200" 
              alt='mysite'       
                />        
          </div>
          <div className=" Tilit" >
        <Image 
              src='/images/th/th0.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-200" 
              alt='mysite'       
                />   
                </div>   
                </div>  
        

    
       

       

         <div className='flex flex-col gap-3 mt-5'> 
                <Heading className="mb-2 text-lg text-white font-sfprodisplayregular">
                     <MdWorkspacesOutline />
                </Heading>
                </div>
                <div className='flex flex-col gap-3 '>            
                <p className='flex  indent-0.5  mb-6 text-left text-md font-light font-sfprodisplaylight  text-gray-50'>
                    I chose to create a site that would offer multiple services and have the ability to requst a quote for the service. A main focus with having multiple services was to work on my efficiency with Typescript, while testing my creativeness throughout the process.  
                    
                </p>             
                </div>  
             
        
            </Box>
            </div>
        </Container>
    )
}

export default Jacksite;