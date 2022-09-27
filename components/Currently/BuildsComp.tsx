import Image from 'next/image'
import { Link, } from '@chakra-ui/react'
import Parallax from '../Parallax/index'
import { builds } from '../../data/currently/buildsItems'
import { IoMdArrowRoundForward } from 'react-icons/io'
import NextLink from 'next/link'



export default function Builds() {
  return (
    <div className='flex flex-col gap-4 '>
    {builds.map((item, key) => (
      <Parallax key={key}>
        
        <div
         
          className='transition-all rounded-sm cursor-pointer z-5 ring-1 ring-white/75 group hover:text-black/90'
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
        
          <div className='flex flex-row gap-6 p-1 rounded bg-gray-1000 '>
          <NextLink href={item.deployed_url}  passHref scroll={false}> 
            <Link className='pb-1 ml-1 text-xl text-white font-semi-bold font-sfprodisplayregular'>
              {item.name}
              </Link>
              </NextLink>
              
             
              </div>
              </div>

      </Parallax>
    ))}
  </div>
  )
}