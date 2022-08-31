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
        'flex gap-5 space-betweenitems-center',
        'hover:bg-gray-800 dark:hover:bg-gray-800',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex w-9/12 p-2 ml-1 rounded-md bg-gray-800/95'>
      <div className='pr-1'>{icon}</div>
      <div className='pr-1'>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
      </div>
    </a>
  )
}
