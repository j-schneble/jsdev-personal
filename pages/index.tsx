import type { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useState } from 'react'
import { 
  Grid, 
  Text, 
  Link, 
  Box, 
  Button, 
  useToast,
  Heading,
  FormControl,
  FormLabel,
  Input,
   } from '@chakra-ui/react'
import Tool from '../components/Tool/Tools'
import { ToolBox } from '../data/tools/toolBox'
import Container from '../components/Container/index'
import Builds from '../components/Currently/index'
import  Footer  from '../components/Footer/index'
import { ChevronRightIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import {FiMessageSquare } from 'react-icons/fi'
import { BiMessageSquareAdd } from 'react-icons/bi'
import Popup from 'reactjs-popup';
import { BsChatText} from 'react-icons/bs'
import useInView from 'react-cool-inview'
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { BsBoxArrowRight } from "react-icons/bs";
import {ImSpinner9 } from'react-icons/im';


const Home: NextPage = () => {


  
  return (
    

   
    <Container>
      <header className='flex flex-col gap-3 '>
        <div className='flex items-center gap-4'>  
    
           <h1 className='text-3xl text-black indent-1 font-sfprodisplayregular'>  Jack Schneble   </h1>
   
</div>       
         
   
        <div className='flex flex-col indent-0.5  text-left text-md  font-sfprodisplaylight  text-gray-800'>
          <p>
           A developer that believes in discovering the &quot;why.&quot; As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create 
                efficient and beautiful software. 
          </p>
         
          </div> 
       
        </header>
        


       <div className='flex flex-col gap-2 mt-12 '>
        <h1 className='text-lg font-light text-black font-sfprodisplaylight'><ImSpinner9/></h1>
        <div className='flex flex-col gap-2 '>
          
          <p className="text-md indent-0.2  font-sfprodisplaylight  text-gray-800 ">
Tools and technologies I have been using on a regular basis.
          </p>
        </div>

        <div className="p-2 text-white ">

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

      <h2 className='mt-10 text-2xl text-black font-sfprodisplayregular'>Recent</h2>
      
        <Text className="mt-1 text-md indent-0.5  font-sfprodisplaylight text-gray-800">
               Projects that I am working on below, check out the repositories to stay updated. 
        </Text>              
   <NextLink href="/projects"  passHref scroll={false}>
        
            <Link className='flex font-sfprodisplayregular indent-0.5 text-gray-700' >View my completed builds here {''} <BsBoxArrowRight className='w-6 pl-1 text-gray-900 h-7' /></Link> 
            </NextLink>
          <div className='mt-4'>
             <Builds />
             </div>
         
  </Container>

  )
}

export default Home