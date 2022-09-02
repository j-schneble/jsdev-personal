import React from 'react'
import { useState } from 'react'
import Footer from '../Footer/index'
import { Transition } from '@headlessui/react'
import {
  Box,
 
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,

  useToast
  
} from "@chakra-ui/react";
import splitbee from '@splitbee/web'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

import NavMenu from '../NavMenu/index'

import { cn } from '../../lib/classNames'



import Popup from 'reactjs-popup';

import useInView from 'react-cool-inview'
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

import type { NextPage } from 'next'
import NextLink from 'next/link'


interface IContainerProps {
  back?: {
    href: string
    label: string
  }
  footer?: boolean
  showNav?: boolean
  projectsNav?: string
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string

  [key: string]: any

  date?: any
}

export default function Container({
  footer = true,
  back,
  projectsNav = '',
  showNav = true,
  children,
  title = 'Jack Schneble - Developer.',
  description = 'Develop.',
  image = '',
  date,
  ...props
}: IContainerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const meta = {
    title,
    description,
    image,
    type: 'website',
    date,
    props,
  }
  splitbee.init()

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  })
  init("KhAEHk-gFA5ArVOho");

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
      setName('');
      setEmail('');
      setMessage('');
      setIsLoading(false);
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      setIsLoading(true);

      emailjs.send("service_042wmpe","template_y0wbbdl", {
          from_name: name,
          from_email: email,
          message: message,
      }).then((result) => {
          clearInput();

          toast({
              title: 'Email sent.',
              description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
              status: 'success',
              duration: 9000,
              isClosable: true
          })

      }, (error) => {
          clearInput();

          toast({
              title: 'Email not sent.',
              description: error.text,
              status: 'error',
              duration: 9000,
              isClosable: true
          })
      });
  }


  return (
    <>
      <NavMenu opened={isOpen} setOpened={setIsOpen} />
      <div
        className={cn(
          projectsNav ? 'bg-dots' : '',
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
         
          <meta name='robots' content='follow, index' />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Jack Schneble' />
          <meta property='og:description' content={meta.description} />
          <meta name='ogdescription' content={meta.description} />
          <meta name='og:image' content={meta.image} />
        
        </Head>

        <Transition
          as={React.Fragment}
          show={showNav}
          enter='transition duration-100 ease-in-out'
          enterFrom='opacity-0 scale-90'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in-out'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <nav className='sticky w-full  bg-stickyy dark:bg-stickyy  z-[1] top-2 md:top-4 max-w-2xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
            <button
              className='text-2xl button-primary-y '
              onClick={() => setIsOpen(!isOpen)}
            >
              
              ⌜⌟
            </button>
            {projectsNav && (
              <div className='flex flex-row gap-1 text-tertiary'>
                <Link href='/'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    index
                  </a>
                </Link>
                <span></span>
                <Link href='/contact'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    Contact
                  </a>
                </Link>
                <span>/</span>
                <Link href='/projects'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    Projects
                  </a>
                </Link>
               
                <span>/</span>
                <Link href={`/projects/${projectsNav}`}>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    {projectsNav}
                  </a>
                </Link>
              
               
              </div>
            )}
            {!projectsNav && (
              <div className='flex flex-row mr-1 space-x-4 item-center '>
                
               
                <Popup trigger={ 
                  <button>
                         <p className='w-6 h-6 text-xl'>
                                 💬
                            </p>
                  </button>}
                  >
                  <Box mt={4} marginRight={10} pr={8}  my={4} className='pop'    textAlign="left">
            
                                      <form  onSubmit={handleSubmit}>
                                        
                                        <div className='flex mr-10 '>
                                          
                                      <div className='grid grid-cols-1 gap-1 p-4 mb-2 mr-6'>
                                      <p className='items-center tracking-wide text-center qk font-md '>Quick Message</p>
                                          <FormControl mr={10}  className='space' >
                                              <FormLabel  textColor={'black'}   fontFamily='sfprodisplayregular' key={'name'}></FormLabel>
                                              <Input
                                                  id='name'
                                                  type={'text'}
                                                  className='typing2'
                                                  value={name}
                                                  placeholder="Name"
                                                  marginRight={1}
                                                  borderRadius={'6px'}
                                                  size="sm"
                                                 
                                                  width={'95%'}
                                                  onChange={event => setName(event.currentTarget.value)}
                                                  backgroundColor={'gray.50'}
                                                  
                                              />
                                             
                                          </FormControl>
      
                                          <FormControl className='space' ml={1}  mt={6}>
                                              <FormLabel  textColor={'black'} ml={1}  fontFamily='sfprodisplayregular' key={'email'}></FormLabel>
                                              <Input
                                                  id='email'
                                                  className='typing2'
                                                  type={'email'}
                                                  value={email}
                                                  placeholder='Email'
                                                  marginRight={1}
                                                  size="sm"
                                                  borderRadius={'6px'}
                                                  width={'95%'}
                                                  onChange={event => setEmail(event.currentTarget.value)}
                                                  backgroundColor={'gray.100'}
                                              />
                                          </FormControl>
                                          <FormControl className='space'  mt={6}>
                                              <FormLabel  textColor={'black'} p={4}   fontFamily='sfprodisplayregular' key={'message'}></FormLabel>
                                              <Input
                                                  id='message'
                                                  className='typing2'
                                                  type={'text'}
                                                  value={message}
                                                  placeholder="Type your message..."
                                                  borderRadius={'6px'}
                                                  size="lg"
                                                 
                                                  marginLeft={2}
                                                  width={'100%'}
                                                  onChange={event => setMessage(event.currentTarget.value)}
                                                  backgroundColor={'gray.50'}
                                              />
                                          </FormControl>
                                          <Button
                                              variant="solid"
                                              type="submit"
                                              width="full"
                                              
                                              
                                             
                                              isLoading={isLoading}
                                              loadingText='Sending'  
                                              textColor={'white'}
                                              className='qkmsg'
    
                                          >
                                              Send ➤
                                          </Button>
                                          </div>
                                          </div>
                                      </form>
                                  </Box>
                </Popup>
                <a
                  href='www.linkedin.com/in/jackaschneble'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Twitter'
                >
                
                  <IoLogoLinkedin className='w-6 h-auto transition-all duration-200 rounded-md fill-current text-indigo-50 dark:text-gray-600 dark:hover:text-gray-300 hover:text-opacity-100' />
                </a>
                <a
                  href='https://github.com/j-schneble/'
                  className='visible lit2'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <IoLogoGithub className='w-6 h-auto transition-all duration-200 rounded-md fill-current text-indigo-50 dark:text-gray-600 dark:hover:text-gray-300 hover:text-opacity-100' />
                </a>
               
                
              </div>
            )}
            
          </nav>
        </Transition>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <main
              className={cn(
                'px-4 mt-20',
                'max-w-2xl',
                'mx-auto my-auto',
                'flex flex-col justify-center gap-12',
                'divide-y divide-gray-300 dark:divide-gray-700',
                'rounded-lg',
                projectsNav ? 'shadow-2xl dark:shadow-gray-800/90 pt-6' : ''
              )}
            >
              <div className='flex flex-col gap-2'>
                {back && (
                  <Link href={back.href}>
                    <a
                      className={cn(
                        'text-tertiary hover:text-secondary transition duration-200 ease-in-out cursor-pointer group mb-4'
                      )}
                    >
                      <span
                        aria-hidden='true'
                        className='inline-block transition-transform duration-200 ease-in-out translate-x-0 group-hover:-translate-x-1'
                      >
                        ⇤
                      </span>{' '}
                      {back.label}
                    </a>
                  </Link>
                )}
                {children}
              </div>
              {footer && (
                <Footer />
              )}
            </main>
          </m.div>
        </LazyMotion>
      </div>
    </>
  )
}
