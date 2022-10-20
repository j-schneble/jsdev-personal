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
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiSocketdotio,
    SiJavascript,
    SiHtml5

  
  } from 'react-icons/si'

interface Tool {
  name: string
 
  url: string
  icon?: React.ReactNode
  exp: string
  exp1: string
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

interface Weather {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Biolink {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Inote {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Ichatv2 {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Ichat {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Fbclone {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Twitterclone {
  name: string
 
  url: string
  icon?: React.ReactNode
}

interface Personal{
  name: string
 
  url: string
  icon?: React.ReactNode
}







export const ToolBox: Tool[] = [
      {
        name: 'Chakra',
        icon: <SiChakraui />,
        url: "https://chakra-ui.com/",
        exp: 'UI design',
        exp1: 'Build speed',
       
      },  
      {
        name: 'Firebase',
        icon: <SiFirebase />,
        url: "https://firebase.google.com/",
        exp: 'Real-time db',
        exp1: 'Cloud-based',
      },
      {
        name: 'Typescript',
        icon: <SiTypescript />,
        url: "https://www.typescriptlang.org/",
        exp: 'Refactoring speed',
        exp1: 'Static Typing',
      }, 
      {
        name: 'Github',
        icon: <SiGit />,
        url: "https://github.com/j-schneble",
        exp: 'Code',
        exp1: 'Collabortion',
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        url: "https://nextjs.org/",
        exp: 'Auto code splitting',
        exp1: 'Project management',
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


export const WeatherBox: Weather[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    url: "https://javascript.com/",
  },

]

export const BioBox: Biolink[] = [
  {
    name: 'React.js',
    icon: <FaReact />,
    url: "https://javascript.com/",
  },  
  {
    name: 'Three.js',
    icon: <SiThreedotjs />,
    url: "https://javascript.com/",
  },
]

export const NoteBox: Inote[] = [
  {
    name: 'React.js',
    icon: <FaReact />,
    url: "https://javascript.com/",
  },  
  {
    name: 'MongoDB',
    icon: < SiMongodb/>,
    url: "https://javascript.com/",
  },  
  {
    name: 'Express.js',
    icon: <SiExpress />,
    url: "https://javascript.com/",
  },  
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    url: "https://javascript.com/",
  },  
]

export const ChatBox2: Ichatv2[] = [
  {
    name: 'React.js',
    icon: <FaReact />,
    url: "https://javascript.com/",
  },
  {
    name: 'Socket.io',
    icon: <SiSocketdotio />,
    url: "https://javascript.com/",
  },  
  {
    name: 'Express.js',
    icon: <SiExpress />,
    url: "https://javascript.com/",
  },  
]
export const ChatBox: Ichat[] = [
  {
    name: 'Vanilla.js',
    icon: <SiJavascript />,
    url: "https://javascript.com/",
  },
  {
    name: 'HTML',
    icon: <SiHtml5 />,
    url: "https://javascript.com/",
  },  

]

export const FbBox: Fbclone[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    url: "https://javascript.com/",
  },
  {
    name: 'Firebase',
    icon: <SiFirebase />,
    url: "https://javascript.com/",
  },

]

export const TwitterBox: Twitterclone[] = [
  {
    name: 'React.js',
    icon: <FaReact />,
    url: "https://javascript.com/",
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    url: "https://javascript.com/",
  },


]

export const PersonalBox: Personal[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Chakra',
    icon: <SiChakraui />,
    url: "https://javascript.com/",
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    url: "https://javascript.com/",
  },


]

export const GetChiefBox: Personal[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Chakra',
    icon: <SiChakraui />,
    url: "https://javascript.com/",
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    url: "https://javascript.com/",
  },


]


export const PrimoBox: Personal[] = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    url: "https://javascript.com/",
  },
  {
    name: 'Chakra',
    icon: <SiChakraui />,
    url: "https://javascript.com/",
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    url: "https://javascript.com/",
  },


]
