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
        'hover:bg-gray-100 dark:hover:bg-gray-100',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex p-2 ml-1 rounded-sm bg-slate-300/10 '>
      <div className='pr-3'>{icon}</div>
      <div className='w-full pr-4 '>
        <h2 className=' font-sfprodisplaytext'>{name}</h2>
        </div>
      </div>
    </a>
  )
}
