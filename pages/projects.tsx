import NextLink from 'next/link'
import  Footer  from '../components/Footer/index'
import React from "react";
import Container from '../components/Container/index'
import { useState } from "react";
import ProjectsComp from '../components/projects/ProjectsComp';
import { projects as projectsData } from '../data/currently/buildsItems';
import { Link } from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { BsBoxArrowRight } from 'react-icons/bs'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");


  /* ProjectCard still works if implemented, Created Projects Comp to work on Parallax */

  return (
    <Container >
     
      <h1 className='flex p-2 text-lg text-black font-sfprodisplayregular'>  Constantly looking for a new way to understand and create, I am always working on 
                new projects.  </h1>
    
             <NextLink href="https://www.github.com/j-schneble"  passHref scroll={false}>
        
            <Link className='flex p-1 pb-4 mb-8 text-lg text-gray-800 indent-2 font-sfprodisplaylight' > check out more on my Github {''} <BsBoxArrowRight className='w-6 h-6 pt-1 pl-1 text-gray-900' /></Link> 
            </NextLink>
      <div className='col-span-12 sm:col-span-6 lg:col-span-6 '>
      

            <ProjectsComp     />
           
       </div>
    </Container>
  );

}

export default Projects;


