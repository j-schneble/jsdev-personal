
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Ichatv2tools from '../../components/ProjectTools/Ichatv2tools'
import { ChatBox2 } from '../../data/tools/toolBox'

const ichatv2 = () => {
    return (
        <Container className='overflow-none overscroll-y-none overflow-y-none over'>
        <div className='px-2 py-2 bg-gray-900 rounded-md shadow-md shadow-gray-900/75'>
            <Box className='p-2 gla'>
                <div className='flex flex-col gap-2'>
                        <Heading className="mt-5 mb-4 ml-2 text-2xl  leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                            iChatv2
                        </Heading>
                    </div>
                    <div>
                        <div>
                        <Image               
                            src='/images/ichatanon.png'
                            objectFit='cover' 
                            className="border rounded-md shadow-sm zoomA shadow-gray-800" 
                            alt='mysite'       
                        /> 
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/ichat-v2'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://ichat-v2.vercel.app/'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-4'>

        <p

        className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
        iChatv2 is an upgraded and more secure version of iChat.
        </p>      
        <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
            I wanted more secure login authentication with iChat rather than joining immediately and being in a chatroom. Even with a username creation it is still basically anonymous, there I added Okta authentication.
        </p> 

        </div>  
        <div className='grid grid-cols-3 '>
                {/* Lazy */}
                    {ChatBox2.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                    return 0
                    }).map(ichatv2tools => (
                    <Ichatv2tools
                    
                        icon={ichatv2tools.icon}
                        key={ichatv2tools.name}
                        name={ichatv2tools.name}
                        url={ichatv2tools.url}
                    />
                    ))}
                </div>



                </Box>
            </div>

        </Container>
    )
}

export default ichatv2