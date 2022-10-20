import NextLink from 'next/link'

import React from "react";
import Container from '../components/Container/index'
import { useState } from "react";
import ProjectsComp from '../components/projects/ProjectsComp';
import { projects as projectsData } from '../data/currently/buildsItems';
import { Link } from '@chakra-ui/react'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");


  /* ProjectCard still works if implemented, Created Projects Comp to work on Parallax */

  return (
    <Container  >
     
      <h1 className='flex p-1 text-lg text-whitefont-sfprodisplayregular'>  Constantly looking for a new way to understand and create, I am always working on 
                new projects.  </h1>
    
             <NextLink href="https://www.github.com/j-schneble"  passHref scroll={false}>
        
            <Link className='flex p-1 pb-4 mb-6 masked-copy md-type' > <p> Check out more on my Github </p> {''} <p className='w-8 pb-1 pl-1 text-white h-7' >↗︎</p></Link> 
            </NextLink>
      <div className='col-span-12 sm:col-span-6 lg:col-span-6 '>
      

            <ProjectsComp     />
           
       </div>
    </Container>
  );

}

export default Projects;


