
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Selfintrotool from '../../components/ProjectTools/Selfintrotools'
import { ProjectBox1 } from '../../data/tools/toolBox'

const Selfintro = () => {
    return (
        <Container>
            <div className='px-2 py-2 rounded-md shadow-md bg-gray-900 shadow-gray-600/75'>
                <Box>
                    <div>
                <Heading className="mt-5 mb-4 ml-2 text-2xl font-bold leading-none tracking-wider text-left text-white font-sfprodisplaybold">
                    Self-Intro
                </Heading>
                    </div>
                    <div className="flex items-center">    
            <div className='mb-2 ml-3 mob-w'>                         
              <Image               
              src='/images/selfintro/selfintro.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>

         <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/self-intro'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://self-intro-seven.vercel.app/'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div> 
        <div className='flex flex-col gap-3 mt-4'>

          <p

          className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
              This project was created when building a personal site. I originally wanted to include some type of Three.js animation or have something different in the site. I created this terminal utilizing hot keys but did not want it apart of my personal site, therefore I kept it as its own application. 
          </p>      
          <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
              A main focus with having multiple services was to work on my efficiency with Typescript, while testing my creativeness throughout the process.  
          </p> 

          </div>   

        <div className='grid grid-cols-2 grid-rows-2 gap-2 ml-1'>
          {/* Lazy */}
            {ProjectBox1.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(selfintrotool => (
              <Selfintrotool
              
                icon={selfintrotool.icon}
                key={selfintrotool.name}
                name={selfintrotool.name}
                url={selfintrotool.url}
              />
            ))}
          </div>
                </Box>
                
            </div>

        </Container>
    )
}
export default Selfintro