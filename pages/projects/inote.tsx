
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Inotetools from '../../components/ProjectTools/Inotetools'
import { NoteBox } from '../../data/tools/toolBox'

const inote = () => {
    return (
        <Container>
            <div className='px-2 py-2 rounded-md shadow-md bg-gray-900 shadow-gray-600/75'>
                <Box>
                    <div className='flex flex-col gap-2'>
                        <Heading className="mt-5 mb-4 ml-2 text-2xl font-bold leading-none tracking-wider text-left text-white font-sfprodisplaybold">
                            iNote
                        </Heading>
                    </div>
                    <div>
                        <div>
                        <Image               
                            src='/images/savednote.png'
                            objectFit='cover' 
                            className="border rounded-md shadow-sm zoomA shadow-gray-800" 
                            alt='mysite'       
                        /> 
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/Application-Project'>
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

          className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
             This is  MERN stack application. I myself love organization and find myself always writing notes and trying out different notes applications.
          </p>      
          <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
              Constantly using different notes applications, I decided I would try and make one myself.
          </p> 

        </div>  
        <div className='grid grid-cols-2 grid-rows-2 gap-2 '>
          {/* Lazy */}
            {NoteBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(inotetools => (
              <Inotetools
              
                icon={inotetools.icon}
                key={inotetools.name}
                name={inotetools.name}
                url={inotetools.url}
              />
            ))}
          </div>


                </Box>
            </div>

        </Container>
    )
}

export default inote