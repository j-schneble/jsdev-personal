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
    SiTailwindcss,
    SiTypescript
  
  } from 'react-icons/si'

interface Tool {
  name: string
 
  url: string
  icon?: React.ReactNode
}
interface Tallow {
  name: string
 
  url: string
  icon?: React.ReactNode
}
interface Selfintro {
  name: string
 
  url: string
  icon?: React.ReactNode
}




export const ToolBox: Tool[] = [
      {
        name: 'React.js',
        icon: <FaReact />,
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
        name: 'Github',
        icon: <SiGit />,
        url: "https://javascript.com/",
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        url: "https://javascript.com/",
      },
    
]


export const ProjectBox: Tallow[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    url: "https://javascript.com/",
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    url: "https://javascript.com/",
  },

]

export const ProjectBox1: Selfintro[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    url: "https://javascript.com/",
  },
  {
    name: 'Three.js',
    icon: <SiThreedotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Chakra',
    icon: <SiChakraui />,
    url: "https://javascript.com/",
  }
]


