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
    <div className=' overflow-none overscroll-y-none overflow-y-none over'>
    <div className="container1">
  <div className="box1">
  
    <div className="content1">
    
      <Box > 
      <Heading 
                className='pt-1 pb-2 pl-2 text-3xl text-black font-sfprodisplaybold'
              >
                Let's get in touch ☑
               
              </Heading>
            </Box>
            <Box my={2}   textAlign="left">

            <h2 className='pb-3 pl-3 text-black text-md font-sfprodisplaylight'>
              Feel free to reach out anytime
            </h2>
   
        <form onSubmit={handleSubmit}>

          <FormControl  >
            <div className='grid grid-cols-2 gap-2 mt-3 mb-2'>
              <Box >
                 <FormLabel className='pt-1 pb-1 pl-0.5 tracking-wide text-md text-gray-900 font-sfprodisplayregular ' key={'name'}>Full Name </FormLabel>
                  <Input 
                    className='w-full py-1 pl-2 text-black rounded-md shadow-xs bg-slate-100/75'
                    id='name'
                    type={'name'}
                    value={name}
                    placeholder="Your Name"
                    onChange={event => setName(event.currentTarget.value)}
                  />
              </Box>
            <Box>
            <FormLabel className='pt-1 pb-2 pl-0.5 text-md tracking-wide text-gray-900/90 font-sfprodisplayregular'  key={'email'}>Email</FormLabel>
            <Input 
              className='w-full py-1 pl-2 text-black rounded-md shadow-xs bg-slate-100/75'
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
        className='pt-1 pb-1 tracking-wide text-md text-gray-900/90 font-sfprodisplayregular' 
        htmlFor="message" key={'message'}>
        Message
      
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
        className='w-full px-2 py-2 mt-5 tracking-wider rounded-sm buttonmsg text-md font-sfprodisplaybold'
        variant="solid"
        type="submit"
        width="full"
        mt={4}
        isLoading={isLoading}
        loadingText='Submitting'                                            
      >
        Send Message 
      
      </Button>
      </form>                
     </Box>
     </div>
      </div>
      </div>
      </div>
     
      


        
         

         
     
 </Container>


    )
  }

export default Contact

