import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Grid, Text, Link,  Button } from '@chakra-ui/react'
import Tool from '../components/Tool/Tools'
import { ToolBox } from '../data/tools/toolBox'
import Container from '../components/Container/index'
import Builds from '../components/Currently/index'
import  Footer  from '../components/Footer/index'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";


const Home: NextPage = () => {

  
  return (
    

   
    <Container>
      <header className='flex flex-col gap-3'>
        <div className='flex items-center gap-4'>
          

        

           <h1 className='text-3xl font-bold text-black indent-1 font-sfprodisplaylight'>  Jack Schneble </h1>
        </div>
        <div className='flex flex-col indent-0.5 text-left text-lg border-gray-300/50 pl-2 pt-1 border-l-2 font-sfprodisplaylight gap-2 text-gray-700'>
          <p>
           A developer that believes in discovering the &quot;why.&quot; As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create 
                efficient and beautiful software. 
          </p>
         
    
        </div>
        </header>
      


       <div className='flex flex-col gap-2 mt-12 '>
        <h1 className='text-2xl text-black font-sfprodisplayregular'>Tech</h1>
        <div className='flex flex-col gap-2 '>
          
          <p className="text-lg indent-0.5 font-sfprodisplaylight text-gray-700 ">
          Some of the tools and technologies I have been using on a regular basis.
          </p>
        </div>

        <div className="p-4 text-black ">

        <div className='grid grid-cols-2 gap-8 my-3'>
          {/* Lazy */}
            {ToolBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(tool => (
              <Tool
                icon={tool.icon}
                key={tool.name}
                name={tool.name}
                url={tool.url}
              />
            ))}
          </div>
        </div>
      </div>

      <h2 className='mt-10 text-2xl text-black font-sfprodisplayregular'>Recent works</h2>
      
        <Text className="mt-1 text-lg indent-0.5 font-sfprodisplaylight text-gray-700">
               Projects that I am working on below, check out the repositories to stay updated. 
        </Text>              
   <NextLink href="/projects"  passHref scroll={false}>
        
            <Link className='flex font-sfprodisplaylight indent-0.5 text-gray-700' >View my completed builds here {''} <ChevronRightIcon className='w-6 h-6 text-pink3' /></Link> 
            </NextLink>
          <div className='mt-4'>
             <Builds />
             </div>
         
  </Container>

  )
}

export default Home