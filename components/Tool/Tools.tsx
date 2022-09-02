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
        'hover:bg-white dark:hover:bg-white',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex w-9/12 p-2 ml-1 rounded-md bg-bg-gradient-to-b from-gray-900/95 to-gray-700 bg-gradient-to-r'>
      <div className='pr-1'>{icon}</div>
      <div className='pr-1'>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
      </div>
    </a>
  )
}
