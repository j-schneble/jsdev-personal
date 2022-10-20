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
         
          className='transition-all rounded-sm cursor-pointer z-5 ring-2 ring-white/25 group hover:text-black/90'
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
        
          <div className='flex flex-row gap-6 p-1 rounded dark:bgdark bgdark '>
          <NextLink href={item.deployed_url}  passHref scroll={false}> 
            <Link className='py-2 ml-1 projdisp-copy projdisp-type font-semi-bold '>
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