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

    
    <Container className='overflow-none overscroll-y-none overflow-y-none over' >

<Box className='mt-10 '>
      <div className='contain bg-gradient-to-r pad from-[#7928ca] to-[#00bfffd3]'>

      <div className='w-full p-1 rounded-md bg-gray-1000/95 '>


    <div className=''>
      
    
    
      <Box className='mt-1'> 
      <Heading 
                className='pt-1 pb-1 pl-2 text-3xl text-white font-sfprodisplaybold'
              >
                Let's get in touch ☑
               
              </Heading>
            </Box>
            <Box my={2}   textAlign="left">

            <h2 className='pb-2 pl-3 text-white/80 text-md font-sfprodisplaylight'>
              Feel free to reach out anytime
            </h2>
   
        <form onSubmit={handleSubmit}>

          <FormControl  >
            <div className='grid grid-cols-2 gap-1 mt-5 mb-4 ml-3 mr-3'>
              <Box >
                 <FormLabel className='pt-1 pb-1 pl-0.5 tracking-wide text-md  text-white/90 font-sfprodisplayregular ' key={'name'}>Full Name </FormLabel>
                  <Input 
                    className='w-full py-1 pl-2 text-gray-800 rounded-sm shadow-xs lit bt'
                    id='name'
                    type={'name'}
                    value={name}
                    placeholder="Your Name"
                    onChange={event => setName(event.currentTarget.value)}
                  />
              </Box>
            <Box>
            <FormLabel className='pt-1 pb-2 pl-0.5 text-md tracking-wide text-white/90 font-sfprodisplayregular'  key={'email'}>Email</FormLabel>
            <Input 
              className='w-full py-1 pl-2 text-white rounded-sm shadow-xs lit bt'
              id='email'
              type={'email'}
              value={email}
              placeholder='Your Email'
              onChange={event => setEmail(event.currentTarget.value)}            
            />
            </Box>
          </div>
        </FormControl>
      <FormControl className='ml-3 mr-3' >
      <FormLabel 
        className='pt-1 pb-1 pl-1 tracking-wide text-white/90 text-md font-sfprodisplayregular' 
        htmlFor="message" key={'message'}>
        Message
      
      </FormLabel>
      <Input
      className="block w-full py-3 pl-4 mb-3 text-gray-800 rounded-sm shadow-xs lit bt"
      id='message'
      type={'message'}
      value={message}
      placeholder="Type your message..."
      onChange={event => setMessage(event.currentTarget.value)}  
      />
      </FormControl>
      <FormControl>
      <Button 
        className='w-full px-2 py-2 mt-8 msgbtn'
        marginLeft={'1'}
        marginRight={'1'}
        variant="solid"
        type="submit"
        
        mt={4}
        isLoading={isLoading}
        loadingText='Sending'                                            
      >
        <p className='font-semibold tracking-wider text-white font-sfprodisplayregular'>
        Send Message 
        </p>
     
      
      </Button>
      </FormControl>
      </form>                
     </Box>
     </div>
     </div>
     </div>
 
    


     </Box>
         

 </Container>


    )
  }

export default Contact

