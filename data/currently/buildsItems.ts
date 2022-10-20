import { IProject } from '../../types';
import { CurrentProject } from '../../types'



export const builds: CurrentProject[] = [
  { 
    name: 'getChiefAnalytics',
    description: 'Working on a new potential site for my analytics company. ',
    image_path: '/images/newchiefscreen.png',
    deployed_url: 'https://pr-service.vercel.app/',
    source_url: 'https://pr-service.vercel.app/' 
  },
    {    
      name: 'Recreating Twitter',
      description: 'A Twitter clone using, React and Tailwind. Currently is just a front end app using real embedded tweets from a demo twitter account I created. The plan is to add a db and use the Twitter API.',
      image_path: '/images/showtweet2.png',   
      deployed_url: '/projects/tweeter',
      source_url: 'https://github.com/j-schneble/js-personal' 
    },
  ]
  export const projects: IProject[] = [
    { 
      name: 'getChiefAnalytics',
      description: 'Working on a new potential site for my analytics company. ',
      image_path: '/images/newchiefscreen.png',
      deployed_url: '/projects/chiefanalytics',
      source_url: 'https://pr-service.vercel.app/' 
    },
    { 
      name: 'Primo Services',
      description: 'An Excavation and Landscaping company located in Pennsylvania. ',
      image_path: '/images/primoscreen.png',
      deployed_url: '/projects/primoservices',
      source_url: 'https://pr-service.vercel.app/' 
    },
    { 
      name: "Personal Site",
      description:
      "Personal developer site, built using Nextjs, Typescript, Chakra-UI, Framer-Motion and some Tailwind to make it look nice.",
      image_path: '/images/siteshow.png',
      deployed_url: '/projects/personalsite',
      source_url: 'https://github.com/j-schneble/js-personal'   
    },
    { 
      name: "Tallowhill Home Services",
      description:
      "A demo home improvement / handyman site. Working on efficiency and UI skills. Using Nextjs, Chakra UI, and Tailwind.",
      image_path: '/images/tallshow.png',
      deployed_url: '/projects/jacksite',
      source_url: 'https://github.com/j-schneble/tallowhill-homeimprove'      
    },
    { 
      name: "Self Intro",
      description:
      "A self-introducing home page. When using the correct hot key, a terminal will share an intro about myself.",
      image_path: '/images/sintroshow2.png',
      deployed_url: '/projects/selfintro',
      source_url: 'https://github.com/j-schneble/self-intro'
    },
    {
      name: "Forecast Application",
      image_path: '/images/weathashow.png',
      deployed_url: '/projects/weather',
      description:
      "A weather application that allows you to access current weather data for any location.",
      source_url: 'https://github.com/j-schneble/weather-forecast-app'
    },
    {
      name: "3js Bio Link",
      image_path: '/images/bio-3js.png',
      deployed_url: '/projects/3jsbiolink',
      description:
      "A links page for social media. Includes a link to my github and a personal site, and then messed around with 3js. ",
      source_url: 'https://github.com/j-schneble/biolink-3js' 
    },  
    {
      name: "iNote",
      image_path: '/images/showinote.png',
      deployed_url: '/projects/inote',
      description:
      "A notes application, created to store ideas or personal messages",
      source_url: 'https://github.com/j-schneble/Application-Project'
    },
    {
      name: "Facebook Clone",
      image_path: '/images/showfb.png',
      deployed_url: '/projects/facebook',
      description: 'A Facebook clone created using login authentication, Firebase, Nextjs, and Tailwind. ',
      source_url: 'https://github.com/j-schneble/nxt-facebook'
    }, 
    {
      name: "iChat v1",
      image_path: '/images/ichatv1proj.png',
      deployed_url: '/projects/ichatv1',
      description:
      "The first version of iChat. A real time chat application with chat rooms",
      source_url: 'https://github.com/j-schneble/Chatroom-App'   
    }, 
    {
      name: "iChat v2",
      image_path: '/images/afinal.png',
      deployed_url: '/projects/ichatv2',
      description:
      "An upgraded and more secure version of my chatroom application (iChat).",
      source_url: 'https://github.com/j-schneble/Chatroom-App-v2-'   
    },
   
  ];
  
  
  