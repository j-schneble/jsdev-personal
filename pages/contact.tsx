/* eslint-disable react/no-unescaped-entities */




import useInView from 'react-cool-inview'
import Container from '../components/Container/index'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage'
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';



const Contact = () => {
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

    
       <Container>
        <div className='mb-6 overflow-none overscroll-y-none overflow-y-none'>
          <Box 
            className='max-w-4xl px-4 mx-auto rounded-md backdrop-blur-lg
            [ p-8 md:p-10 lg:p-10 ]
            [ bg-gradient-to-b from-white/60 to-white/30 ]
            [ border-[1px] border-solid border-white border-opacity-30 ]
            [ shadow-gray-800/40 shadow-2xl ] sm:px-6 lg:px-8' 
            >
            <div className='px-3 py-1'>
              <Heading 
                className='pb-2 text-3xl text-black font-sfprodisplaybold'
              >
                Let's get in touch 
                <span className='text-2xl'
                >☑
                </span> 
              </Heading>

            <h2 className='pb-3 mb-4 text-gray-500 text-md font-sfprodisplaylight'>
              Feel free to reach out anytime
            </h2>
          <Box my={2}  textAlign="left">    
            <form onSubmit={handleSubmit}>
              <FormControl  >
                <div className='grid grid-cols-2 gap-2 mt-2 mb-2'>
                  <Box >
                     <FormLabel className='pt-1 pb-1 text-sm tracking-wider text-gray-600/90 font-sfprodisplaylight' key={'name'}>Full Name<span className='isRequired'>*</span> </FormLabel>
                      <Input 
                        className='w-full py-1 pl-4 text-black rounded-md shadow-xs bg-slate-100/75 '
                        id='name'
                        type={'name'}
                        value={name}
                        placeholder="Your Name"
                        onChange={event => setName(event.currentTarget.value)}
                      />
                  </Box>
                <Box>
                <FormLabel className='pt-1 pb-1 pl-0.5 text-sm tracking-wider text-gray-600/90 font-sfprodisplaylight'  key={'email'}>Email<span className='isRequired'>*</span></FormLabel>
                <Input 
                  className='w-full py-1 pl-4 text-black rounded-md shadow-xs bg-slate-100/75 '
                  id='email'
                  type={'email'}
                  value={email}
                  placeholder='Your Email'
                  onChange={event => setEmail(event.currentTarget.value)}            
                />
                </Box>
              </div>
            </FormControl>
          <FormControl >
          <FormLabel 
            className='pt-1 pb-1 text-sm tracking-wider text-gray-600/90 font-sfprodisplayregular' 
            htmlFor="message" key={'message'}>
            Message
            <span className='isRequired'>
              *
            </span>
          </FormLabel>
          <Input
          className="block w-full py-3 pl-4 mb-3 text-black rounded-md shadow-xs bg-slate-100/75"
          id='message'
          type={'message'}
          value={message}
          placeholder="Type your message..."
          onChange={event => setMessage(event.currentTarget.value)}  
          />
          </FormControl>
          
          <Button 
            className='w-50% py-2 px-2  mt-4 buttonmsg  tracking-wider rounded-sm text-md font-sfprodisplaybold '
            variant="solid"
            type="submit"
            width="full"
            mt={4}
            isLoading={isLoading}
            loadingText='Submitting'                                            
          >
            Send Message 
          <span className='pl-1.5 mt-0.5 text-base'>
            ➤
          </span>
          </Button>
          </form>                
         </Box>
        </div>
       </Box>      
      </div>
 </Container>

    )
  }

export default Contact

