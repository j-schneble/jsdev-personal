
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Primotools from '../../components/ProjectTools/PrimoService'
import { PrimoBox } from '../../data/tools/toolBox'

const PrimoServices = () => {
    return (
      <Container className='overflow-none overscroll-y-none overflow-y-none over'>
      <div className='bg-gradient-to-r w-full rounded-sm pad from-[#7928ca] to-[#00bfff]'>
      <div className='px-1 py-2 rounded-sm shadow-2xl ring-1 ring-white/25 bg-gray-1000/95 filter-blur shadow-gray-900 '>
          <Box className=''>
              <div className='flex flex-col gap-2'>
                <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                    Primo Services
                </Heading>
                    </div>
                    <div className="flex items-center">    
            <div className='w-full mb-2 mob-w'>                         
              <Image               
              src='/images/primodone.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>

         <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/pr-service-pa'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://pr-service.vercel.app/'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div> 
        <div className='flex flex-col gap-3 mt-4'>

          <p

          className='flex text-left pt-1 tracking-wide mb-1 rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
              This project was created for a friend of mine while also work on my developing and design skills. The goal was to give him ideas for a new company site. Overall he had no idea where to start and wanted to build the site himself. I chose to create what I thought would look best based on the minimal guidlines he stated while fitting the design asthetic I envisioned for the company.
          </p>      
       

          </div>   

        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2 ml-1'>
          {/* Lazy */}
            {PrimoBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(primotools => (
              <Primotools
              
                icon={primotools.icon}
                key={primotools.name}
                name={primotools.name}
                url={primotools.url}
              />
            ))}
          </div>
                </Box>
                
            </div>
</div>
        </Container>
    )
}
export default PrimoServices