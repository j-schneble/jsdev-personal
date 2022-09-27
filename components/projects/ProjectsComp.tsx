import Image from 'next/image'
import NextLink from 'next/link'
import Parallax from '../Parallax/index'
import { projects } from '../../data/currently/buildsItems'
import { IoLogoGithub } from 'react-icons/io'
import { Link, } from '@chakra-ui/react'
import { IoMdArrowRoundForward  } from 'react-icons/io'

export default function ProjectComp() {
  return (
    <div className='flex flex-col gap-4'>
      {projects.map((project, key) => (
        <Parallax key={key}>
          <div
           
            className='transition-all rounded-sm cursor-pointer z-5 ring-1 ring-white/50 bg-black/90 group hover:text-black/90'
          > 
            <div className='h-52 w-20% relative'>
              <Image
                src={project.image_path}
                objectFit='cover'
                layout='fill'
              
                className='rounded-t-md'
                alt='Summary image'
              />
            </div>
            <div className='rounded bg-gradient-to-r pad from-[#7928ca] to-[#00bfff] place-content-evenly '>
          <div className='flex flex-row gap-6 p-1 bg-gray-1000/90 '>
            <NextLink href={project.deployed_url}  passHref scroll={false}>       
              <Link className='pb-1 ml-1 text-xl text-white font-semi-bold font-sfprodisplayregular'>
                {project.name}
                </Link>
                </NextLink>
                
               
               </div>
                </div>
              
        </div>
        </Parallax>
      ))}
    </div>
  )
}