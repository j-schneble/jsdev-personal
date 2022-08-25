import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'




export const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} jack. All Rights Reserved.`,
    author: {
        name: "Jack Schneble",
        accounts: [
            {
                url: "https://github.com/j-schneble",
                icon: <FaGithub />,
                name: "Github",
                type: "gray"
            },
            {
                url: "https://www.linkedin.com/",
                icon: <FaLinkedin />,
                name: "Linkedin",
                type: "linkedin"
            },
        
         
            {
                url: "mailto:jack@jackschneble.com",
                icon: <SiGmail />,
                name: "Gmail",
                type: "red"
            }
        ]
    }
  }