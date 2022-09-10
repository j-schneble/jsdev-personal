
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Biotools from '../../components/ProjectTools/Biotools'
import { BioBox } from '../../data/tools/toolBox'

const biolink = () => {
    return (
        <Container className='overflow-none overscroll-y-none overflow-y-none over'>
        <div className='px-2 py-2 bg-gray-900 rounded-md shadow-md shadow-gray-900/75'>
            <Box className='p-2 gla'>
                <div className='flex flex-col gap-2'>
                        <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                            3js Bio-link
                        </Heading>
                    </div>

                    <div>
                        <div>
                            <Image               
                                src='/images/bio/biolink.png'
                                objectFit='cover' 
                                className="border rounded-md shadow-sm zoomA shadow-gray-800" 
                                alt='mysite'       
                            />   
                        </div>
                    </div>

                        <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
                            <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
                                <Link href='https://github.com/j-schneble/biolink-3js'>
                                    <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                                    Source
                                    </a>
                                </Link>
                            </div>

                            <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
                                <Link href='https://3js-bio-j-schneble.vercel.app/'>
                                    <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                                    Demo
                                    </a>
                                </Link>
                            </div>
                            </div> 

                    <div className='flex flex-col gap-3 mt-4'>
                        <p  className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
                        Most profiles on social media have a links page that showcase their websites link etc. I chose to create my own and wanted it to be different so I added a 3d wave animation. 
                        </p>      
                        <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
                        Creating the 3d wave itself was the most difficult part and choosing where it will show on the page and keeping it symmetrical. The links however were simple and were going to be my other socials and possible my own website which had not been created yet at the time.
                        </p> 

                    </div>
                    <div className='grid grid-cols-2 ml-1'>
          {/* Lazy */}
            {BioBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(biotools => (
              <Biotools
              
                icon={biotools.icon}
                key={biotools.name}
                name={biotools.name}
                url={biotools.url}
              />
            ))}
          </div>
   
                </Box>
            </div>

        </Container>
    )
}

export default biolink