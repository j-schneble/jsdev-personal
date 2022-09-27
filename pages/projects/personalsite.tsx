import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Personaltools from '../../components/ProjectTools/Personaltools'
import { PersonalBox } from '../../data/tools/toolBox'

const Personal = () => {
    return(
      <Container className='overflow-none overscroll-y-none overflow-y-none over'>
        <div className='bg-gradient-to-r w-full rounded-sm pad from-[#7928ca] to-[#00bfff]'>
      <div className='px-1 py-2 rounded-sm shadow-2xl ring-1 ring-white/25 bg-gray-1000/95 filter-blur shadow-gray-900 '>
          <Box className=''>
              <div className='flex flex-col gap-2'>
                <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                    Schneble.io
                </Heading>
                             
            </div>

              
        <div className="flex items-center">    
            <div className='mb-2 ml-3 mob-w'>                         
              <Image               
              src='/images/jsio.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>  
       

        <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded-sm shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/schneble.io'>
            <a className='font-bold text-gray-800 cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded-sm shadow-sm projbtn'>
            <Link href='https://schneble.io/'>
            <a className='font-bold text-gray-800 cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div>
       

        <div className='flex flex-col gap-3 mt-4'>

          <p

          className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
              This is my personal site I created to showcase my work and share who I am.
          </p>      
          <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
             I chose to build this mainly with Typescript because I wanted to become more comfortable with it. ChakraUI was also incorporated because it allows a site to flow well and enhances the UI. 
          </p> 

        </div>  
                
        <div className='grid grid-cols-3 '>
          {/* Lazy */}
            {PersonalBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(personaltools => (
              <Personaltools
              
                icon={personaltools.icon}
                key={personaltools.name}
                name={personaltools.name}
                url={personaltools.url}
              />
            ))}
          </div>
      
          </Box>
          </div>
  </div>
        </Container>
    )
}

export default Personal