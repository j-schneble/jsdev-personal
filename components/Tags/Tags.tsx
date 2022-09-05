
import { Stack, Tag, TagLeftIcon, TagLabel, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiNextdotjs, SiTypescript, SiChakraui, SiTailwindcss } from 'react-icons/si';
import { getTotalCharCode } from '../utils/utils';
import { NextJSIcon, SemanticIcon, TypeScriptIcon } from '../Icons';


const tagDict = {
    ReactJS: FaReact,
  
    'NextJS': NextJSIcon,
    'Typescript': SiTypescript,
    'Node': IoLogoNodejs,
    'ChakraUI': SiChakraui,
    'Tailwind': SiTailwindcss,
    'Semantic-UI': SemanticIcon,
   
  };

  interface TagsProps {
    tags: string[];
  }
  
  const Tags = ({ tags }: TagsProps): JSX.Element => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    return (
      <Stack height='25px' isInline>
        {tags?.map(tag => (
          <Tag
            key={tag}
            colorScheme={`${
              ['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
                getTotalCharCode(tag) % 10
              ]
            }`}
            size={isLargerThan800 ? 'md' : 'sm'}
          >
       
          </Tag>
        ))}
      </Stack>
    );
  };
  
  export default Tags;