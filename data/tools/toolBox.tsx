import React from 'react'
import {

    FaReact,

  } from 'react-icons/fa'
import {

    SiChakraui,

    SiGit,
    
    SiNextdotjs,
   
    SiFirebase,
   
    SiThreedotjs,
  
  } from 'react-icons/si'

interface Tool {
  name: string
 
  url: string
  icon?: React.ReactNode
}

export const ToolBox: Tool[] = [
    {
        name: 'NextJS',
        icon: <SiNextdotjs />,
        url: "https://javascript.com/",
      },
      { name: 'Three.js',
        icon: <SiThreedotjs />,
        url: "https://javascript.com/",
      },
      {
        name: 'Firebase',
        icon: <SiFirebase />,
        url: "https://javascript.com/",
      },
      {
        name: 'Chakra',
        icon: <SiChakraui />,
        url: "https://javascript.com/",
      },
      {
        name: 'Git',
        icon: <SiGit />,
        url: "https://javascript.com/",
      },
      {
        name: 'React',
        icon: <FaReact />,
        url: "https://javascript.com/",
      },
    
]
