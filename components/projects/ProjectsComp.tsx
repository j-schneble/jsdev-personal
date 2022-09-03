import Image from 'next/image'

import Parallax from '../Parallax/index'
import { projects } from '../../data/currently/buildsItems'
import { IoLogoGithub } from 'react-icons/io'

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
              <p className='text-xl font-semi-bold text-slate-100 font-sfprodisplayregular'>
                {project.name}
                </p>
                <a
                  onClick={() => window.open(project.deployed_url, '_blank')}
                  className='px-1 text-lg rounded-full ring-1 ring-indigo-300'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                    🚀
                    </a>
                
                <a
                  onClick={() => window.open(project.source_url, '_blank')}
                  className='visible '
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <IoLogoGithub className='w-8 ml-1 text-white transition-all duration-200 fill-current h-7 hover:text-opacity-100' />
                </a>
               
                </div>
                <div className='flex pb-1 pl-1 mt-1'>
              <p className=' text-slate-100/80 text-md font-sfprodisplaylight'>{project.description}</p>
              </div>
        </div>
        </Parallax>
      ))}
    </div>
  )
}