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
        'bg-dots text-center  place-content-center filter-blur',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex items-center w-full p-2 text-center rounded shadow-sm shadow-white/50 place-content-center filter-blur bg-dots '>
      <div className='flex items-center pr-1 '>{icon}</div>
      <div className='pl-1'>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
      </div>
    </a>
  )
}
