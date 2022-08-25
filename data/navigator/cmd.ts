export type Action = {
    name: string
    shortcut?: string[]
    keywords?: string
    href?: string
    section: 'Navigation' | 'Socials' | 'Themes'
    icon?: React.ReactNode
    subtitle?: string
    perform?: () => void
  }
  
  export const Navigation: Action[] = [
    {
      name: 'Home',
      keywords: 'home',
      href: '/',
      section: 'Navigation',
    },
    {
      name: 'Projects',
      keywords: 'projects',
      href: '/projects',
      section: 'Navigation',
    },
    {
      name: 'Contact',
      keywords: 'contact',
      href: '/contact',
      section: 'Navigation',
    },
    
 
  ]
  
 
  
 
  