import type { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useState } from 'react'
import { 
  Grid, 
  Text, 
  Link, 

   } from '@chakra-ui/react'
import Tool from '../components/Tool/Tools'
import { ToolBox } from '../data/tools/toolBox'
import Container from '../components/Container/index'
import Builds from '../components/Currently/index'

import { BsBoxArrowInUpRight } from "react-icons/bs";
import {ImSpinner9, ImCog } from'react-icons/im';


const Home: NextPage = () => {


  
  return (
    

   
    <Container>
          <header className='flex flex-col gap-3 '>
        <div className='flex items-center gap-4 big-type masked-copy '>  
    
           <h2 className=' font-sfprodisplayrounded'>  Jack Schneble    </h2>
   
</div>       
         
   
        <div className='flex flex-col text-left masked-copy md-type'>
          <p>
           A developer that believes in discovering the &quot;why.&quot; As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create 
                efficient and beautiful software. 
          </p>
         
          </div> 
       
        </header>
        <div className='flex flex-col gap-2 mt-4 masked-copy md-type '>
       
        <p className='flex flex-col text-left '>
          I build web applications and websites that are efficient, well-designed, and performant. I help my clients create the best possible digital products for their businesses. I dont just develop websites and apps, I make them beautiful, fast and accessible to all. 
        </p>
        </div>
        
       <div className='flex flex-col gap-2 mt-12 '>
        <h1 className='text-lg font-light text-white font-sfprodisplaylight'><ImSpinner9/></h1>
        <div className='flex flex-col gap-2 masked-copy md-type'>
          
          <p className=" indent-0.2    ">
Tools and technologies I have been using on a regular basis.
          </p>
        </div>

        <div className="p-4">

       
        
            <div className='flex flex-col w-full'>

    
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
                exp={tool.exp}
                exp1={tool.exp1}
              />
            ))}
                    </div>
       

        </div>
      </div>

      <h2 className='mt-10 text-2xl text-white font-sfprodisplayregular'>Recent</h2>
      <div className='masked-copy md-type'>
      <p className="mt-1  indent-0.5  ">
               Projects that I am currently working on below
        </p>
      </div>
              
   
          <div className=''>
             <Builds />
             </div>
             
         
  </Container>

  )
}

export default Home