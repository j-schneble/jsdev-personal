import { cn } from '../../lib/classNames'

interface ToolProps {
  name: string

  icon?: React.ReactNode
  url: string
  exp: string
  exp1: string
}

export default function Tool({
  name,

  icon,
  url,
  exp,
  exp1,
}: ToolProps): JSX.Element {
  return (
    <a
      className={cn(
        '  filter-blur',
        'rounded-lg ',
        'cursor-pointer'
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='rounded-sm py-7 dark:bgdark hover:dark:bg-gray-800/80 bgdark halfover fifif filter-blur ring-2 ring-white/10'>


<div className='relative flex flex-row items-center justify-between '>
  <div className='flex'>
  <h2 className='p-2 ml-4 text-2xl bg-black rounded-sm ring-1 ring-white/10 masc'>{icon}</h2>
        <h2 className='p-2 pl-3 pr-10 font-light text-left font-sfprodisplayrounded'>{name}</h2>
  </div>

   
 <div className='flex'>
 <h2 className='px-2 py-1 mr-2 text-sm font-light bg-gray-900 rounded font-sfprodisplaylight'>{exp}</h2>
        <h2 className='px-2 py-1 pr-1 mr-4 text-sm font-light bg-gray-900 rounded font-sfprodisplaylight'>{exp1}</h2>
 </div>
        
        </div>
        


  

</div>
        

       


    </a>
  )
}
