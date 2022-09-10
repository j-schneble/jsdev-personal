import { cn } from '../../lib/classNames'

interface TallowProps {
  name: string

  icon?: React.ReactNode
  url: string
}

export default function Tallow({
  name,

  icon,
  url,
}: TallowProps): JSX.Element {
  return (
    <a
      className={cn(
        'flex gap-2 space-betweenitems-center',
        'hover:bg-white dark:hover:bg-white',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex w-5/12 '>
      <div className='text-xl text-white'>{icon}</div>
      <div className='p-1'>
        <h2 className='font-bold text-white font-sfprodisplayregular'>{name}</h2>
        </div>
      </div>
    </a>
  )
}