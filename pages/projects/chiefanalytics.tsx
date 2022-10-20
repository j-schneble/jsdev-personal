
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Chieftools from '../../components/ProjectTools/Chieftools'
import { GetChiefBox } from '../../data/tools/toolBox'

const ChiefAnalytics = () => {
    return (
      <Container className='overflow-none overscroll-y-none overflow-y-none over'>
      <div className='bg-gradient-to-r w-full rounded-sm pad from-[#7928ca] to-[#00bfff]'>
      <div className='px-1 py-2 rounded-sm shadow-2xl ring-1 ring-white/25 bg-gray-1000/95 filter-blur shadow-gray-900 '>
          <Box className=''>
              <div className='flex flex-col gap-2'>
                <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                    Chief Analytics
                </Heading>
                    </div>
                    <div className="flex items-center">    
            <div className='mb-2 ml-3 mob-w'>                         
              <Image               
              src='/images/getchief.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm zoomA shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>

         <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/chief-analytics'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://getchief-analytics.vercel.app/'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div> 
        <div className='flex flex-col gap-3 mt-4'>

          <p
          className='flex text-left pt-1 tracking-wide mb-1 rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
              getChiefAnalytics provides an all-in-one KPI dashboard that allows a company to monitory the profitability behind their marketing efforts. The Chief Analytics dashboard allows you to track sales, leads, cost, and returns with a single click. Currently rebranding and a new site is needed, this is a dark themed concept I am working on.
              </p>   
          <p
          className='flex text-left pt-1 tracking-wide mb-1 rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
            This site is not finished and is currently being worked on. The main focuses right now are making it mobile responsive, a calendar date option within the scheduling popup, and whether or not the Chief Analytics Dashboard will be provided via your login or if it is provided upon redirect to another site.
            </p>        
       

          </div>   

        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-2 ml-1'>
          {/* Lazy */}
            {GetChiefBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(chieftools => (
              <Chieftools
              
                icon={chieftools.icon}
                key={chieftools.name}
                name={chieftools.name}
                url={chieftools.url}
              />
            ))}
          </div>
                </Box>
                
            </div>
</div>
        </Container>
    )
}
export default ChiefAnalytics