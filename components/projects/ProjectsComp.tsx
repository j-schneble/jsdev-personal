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
           
            className='transition-all bg-gray-900 border border-gray-500 rounded-lg cursor-pointer shadowguy group hover:bg-gray-700'
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
            <div className='flex flex-row gap-6 p-1 mt-1'>
              <p className='pb-1 ml-1 text-xl font-semi-bold text-slate-100 font-sfprodisplayregular'>
                {project.name}
                </p>
                <NextLink href={project.deployed_url}  passHref scroll={false}>       
            <Link className='flex font-sfprodisplayregular indent-0.5 text-gray-700' > {''} <IoMdArrowRoundForward className='w-6 pl-1 text-white h-7' /></Link> 
            </NextLink>
               
               
                </div>
              
        </div>
        </Parallax>
      ))}
    </div>
  )
}