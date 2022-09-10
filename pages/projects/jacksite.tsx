
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Tallow from '../../components/ProjectTools/Tallowtools'
import { ProjectBox } from '../../data/tools/toolBox'

const Jacksite = () => {
    return (
        <Container >
            <div className='px-2 py-2 rounded-md shadow-md bg-gray-900 shadow-gray-600/75'>
            <Box >
                <div className='flex flex-col gap-2'>
                <Heading className="mt-5 mb-4 ml-2 text-2xl font-bold leading-none tracking-wider text-left text-white font-sfprodisplaybold">
                    Tallowhill Home Services
                </Heading>
                             
            </div>
         
              
        <div className="flex items-center">    
            <div className='mb-2 ml-3 mob-w'>                         
              <Image               
              src='/images/th/th1.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>  
       

        <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/tallowhill-homeimprove'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://tallowhill.vercel.app/'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div>
       

        <div className='flex flex-col gap-3 mt-4'>

        <p
            className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm italic font-sfprodisplaylight  text-red-600'>
            Currently working on
        </p> 

          <p

          className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
              This project was created with the purpose of working on front-end skills. Therefore, I chose to create a site that would offer multiple services and have the ability to requst a quote for the service. 
          </p>      
          <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
              A main focus with having multiple services was to work on my efficiency with Typescript, while testing my creativeness throughout the process.  
          </p> 

        </div>  
                
        <div className='grid grid-cols-3 '>
          {/* Lazy */}
            {ProjectBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(tallow => (
              <Tallow
              
                icon={tallow.icon}
                key={tallow.name}
                name={tallow.name}
                url={tallow.url}
              />
            ))}
          </div>
      
          </Box>
          </div>
        </Container>
    )
}

export default Jacksite;