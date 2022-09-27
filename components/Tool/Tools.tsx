import { cn } from '../../lib/classNames'

interface ToolProps {
  name: string

  icon?: React.ReactNode
  url: string
}

export default function Tool({
  name,

  icon,
  url,
}: ToolProps): JSX.Element {
  return (
    <a
      className={cn(
        'flex gap-5 space-between items-center',
        'text-center   place-content-center filter-blur',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='bg-gradient-to-r pad w-10/12 from-[#7928ca] to-[#00bfff] place-content-evenly'>
      <div className='flex items-center w-full p-1 text-center rounded ring-1 ring-black/50 bg-gray-1000 place-content-center filter-blur '>
      <div className='flex items-center pr-1 '>{icon}</div>
      <div className='pl-1'>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
        </div>
      </div>
    </a>
  )
}
