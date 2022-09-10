import Image from 'next/image'
import { Link, } from '@chakra-ui/react'
import Parallax from '../Parallax/index'
import { builds } from '../../data/currently/buildsItems'
import { IoMdArrowRoundForward } from 'react-icons/io'
import NextLink from 'next/link'



export default function Builds() {
  return (
    <div className='flex flex-col gap-4'>
    {builds.map((item, key) => (
      <Parallax key={key}>
        <div
         
          className='transition-all bg-gray-900 border border-gray-500 rounded-lg cursor-pointer shadowguy group hover:bg-gray-700'
        >
          <div className='h-52 w-20% relative'>
            <Image
              src={item.image_path}
              objectFit='cover'
              layout='fill'
            
              className='rounded-t-md'
              alt='Summary image'
            />
          </div>
          <div className='flex flex-row gap-6 p-1 mt-1'>
            <p className='pb-1 ml-1 text-xl font-semi-bold text-slate-100 font-sfprodisplayregular'>
              {item.name}
              </p>
              <NextLink href={item.deployed_url}  passHref scroll={false}>       
          <Link className='flex font-sfprodisplayregular indent-0.5 text-gray-700' > {''} <IoMdArrowRoundForward className='w-6 pl-1 text-white h-7' /></Link> 
          </NextLink>
             
             
              </div>
            
      </div>
      </Parallax>
    ))}
  </div>
  )
}


