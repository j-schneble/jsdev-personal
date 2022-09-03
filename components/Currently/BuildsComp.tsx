import Image from 'next/image'

import Parallax from '../Parallax/index'
import { buildsList } from '../../data/currently/buildsItems'
import { HiOutlineExternalLink } from 'react-icons/hi'
export default function Builds() {
  return (
    <div className='flex flex-col gap-4'>
      {buildsList.map((item, key) => (
        <Parallax key={key}>
          <div
            onClick={() => window.open(item.link, '_blank')}
            className='transition-all bg-gray-900 border border-gray-500 rounded-lg cursor-pointer shadowguy group '
          >
            




            <div className='h-52 w-20% relative'>
              <Image
                src={item.img}
                objectFit='cover'
                layout='fill'
                className='rounded-t-md'
                alt='Summary image'
              />
            </div>
            <div className='flex flex-col gap-1 p-1 '>
              <div className='flex flex-row ml-1 text-lg text-white font-sfprodisplayregular'>
                {item.title} 
                <span className='ml-3 transition-opacity text-slate-50'>
                <HiOutlineExternalLink />
                </span>
              </div>
              </div>
              

             
              <p className='mb-1 ml-2 text-slate-100/75 text-md font-sfprodisplaylight'>{item.description}</p>

            
          </div>
        </Parallax>
      ))}
    </div>
  )
}


