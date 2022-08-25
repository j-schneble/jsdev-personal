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
        'flex gap-5 items-center',
        'hover:bg-gray-100 dark:hover:bg-gray-100',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex flex-row justify-between'>
      <div className='flex items-center pr-2'>{icon}</div>
      <div className='w-full py-3 pr-1 left-2'>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
      </div>
    </a>
  )
}
