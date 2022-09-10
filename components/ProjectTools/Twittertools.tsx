import { cn } from '../../lib/classNames'

interface TwitterProps {
  name: string

  icon?: React.ReactNode
  url: string
}

export default function Twittertools({
  name,

  icon,
  url,
}: TwitterProps): JSX.Element {
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
      <div className='text-xl text-black'>{icon}</div>
      <div className='p-1'>
        <h2 className='font-bold text-black font-sfprodisplayregular'>{name}</h2>
        </div>
      </div>
    </a>
  )
}