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
           
            className='transition-all rounded-sm cursor-pointer z-5 ring-2 ring-white/25 group hover:text-black/90'
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

          <div className='flex flex-row gap-6 p-1 rounded dark:bgdark bgdark '>
            <NextLink href={project.deployed_url}  passHref scroll={false}>       
              <Link className='py-2 ml-1 font-semi-bold projdisp-copy projdisp-type'>
                {project.name}
                </Link>
                </NextLink>
                
               
               </div>
                </div>
              

        </Parallax>
      ))}
    </div>
  )
}