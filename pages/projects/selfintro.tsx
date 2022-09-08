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
  Divider,
  Link,
  Flex,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'
import {MdWorkspacesOutline } from 'react-icons/md'
import {ImSpinner9 } from'react-icons/im';
import Selfintrotool from '../../components/ProjectTools/Selfintrotools'
import { ProjectBox1 } from '../../data/tools/toolBox'

const Selfintro = () => {
    return (
        <Container>
            <div className='px-2 py-2 rounded-md shadow-md shadow-gray-600/75'>
                <Box>
                    <div>
                <Heading className="mt-5 mb-4 ml-2 text-2xl font-bold leading-none tracking-wider text-left text-black font-sfprodisplaybold">
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

        <div className='grid grid-cols-3 '>
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
                
                  icon={Selfintrotool.icon}
                  key={Selfintrotool.name}
                  name={Selfintrotool.name}
                  url={Selfintrotool.url}
                />
            ))}
          </div>
                </Box>
                
            </div>

        </Container>
    )
}
export default Selfintro