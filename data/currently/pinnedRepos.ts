export const pinnedRepos: pinnedRepoType[] = [
    {
      img: '/images/tweeter.png',
      title: 'Recreating Twitter',
      description: 'A Twitter clone using, React and Tailwind. Currently is just a front end app using real embedded tweets from a demo twitter account I created. The plan is to add a db and use the Twitter API.',
      stack: ['ReactJS',  'Tailwind'],
    
      link: 'https://github.com/j-schneble/react-tweeter',
      source: 'https;//github.com/j-schneble/'
 
    },
    {
      img: '/images/tl.png',
      title: 'Tallowhill Home Services',
      description: 'A demo home improvement / handyman site. Working on efficiency and UI skills. Using Nextjs, Chakra UI, and Tailwind. ',
      stack: ['NextJS',  'ChakraUI'],
 
      link: 'https://github.com/j-schneble/tallowhill-homeimprove',
      source: 'https;//github.com/j-schneble/'
 
    },
  
  ];

  export interface pinnedRepoType {
    img: string;
    title: string;
    description: string;
    stack?: string[];
    link: string;
    source: string;
  }