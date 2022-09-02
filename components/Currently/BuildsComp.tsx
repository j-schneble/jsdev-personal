import Image from 'next/image'

import Parallax from '../Parallax/index'
import { buildsList } from '../../data/currently/buildsItems'

export default function Builds() {
  return (
    <div className='flex flex-col gap-4'>
      {buildsList.map((item, key) => (
        <Parallax key={key}>
          <div
            onClick={() => window.open(item.link, '_blank')}
            className='transition-all border rounded-lg cursor-pointer border-gray-400/25 shadowguy bg-bg-gradient-to-b from-gray-900/95 to-gray-700 bg-gradient-to-r group hover:bg-gray-500'
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
            <div className='flex flex-col gap-1 p-2 '>
              <p className='text-lg text-slate-100 font-sfprodisplayregular'>
                {item.title}
                <span className='invisible ml-2 transition-opacity group-hover:visible'>
                  ↗
                </span>
              </p>
              <p className='text-slate-100/75 text-md font-sfprodisplaylight '>{item.description}</p>
            </div>
          </div>
        </Parallax>
      ))}
    </div>
  )
}


