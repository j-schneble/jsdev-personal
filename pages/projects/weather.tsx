
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Weathertools from '../../components/ProjectTools/Weathertools'
import { WeatherBox } from '../../data/tools/toolBox'

const Weather = () => {
    return (
      <Container className='overflow-none overscroll-y-none overflow-y-none over'>
         <div className='bg-gradient-to-r w-full rounded-sm pad from-[#7928ca] to-[#00bfff]'>
      <div className='px-1 py-2 rounded-sm shadow-2xl ring-1 ring-white/25 bg-gray-1000/95 filter-blur shadow-gray-900 '>
          <Box className=''>
              <div className='flex flex-col gap-2'>
                    <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                            Weather 
                    </Heading>

                </div>
                <div className="flex items-center">
                    <div  className='mb-2 w-full mob-w'>
                    <Image               
              src='/images/weatha.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm shadow-gray-800" 
              alt='mysite'       
                />   

                    </div>
                    </div>
                    <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/weather-forecast-app'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://jacks-forecast.vercel.app/'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div> 
        <div className='flex flex-col gap-3 mt-4'>

        
        <p className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
        A weather app I created using  the Current Weather data API from openweather.org (Not mobile ready)
        </p> 
        <p
        className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
            This project was created based on the idea of working on API implementation within Next.js. I was also curious about light and dark mode switches with images.
        </p> 

        </div>   
        <div className='grid grid-cols-2 p-2 ml-1'>
                {/* Lazy */}
                    {WeatherBox.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                    return 0
                    }).map(weathertools => (
                    <Weathertools
                    
                        icon={weathertools.icon}
                        key={weathertools.name}
                        name={weathertools.name}
                        url={weathertools.url}
                    />
                    ))}
                </div>


            </Box>
        </div>
        </div>
       </Container>

    )
}

export default Weather;