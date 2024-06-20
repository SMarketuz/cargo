import React, { useEffect, useState } from 'react'
import { colorful, original, transparent, white } from '../assets'
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { FaBarsStaggered } from "react-icons/fa6";
import Cookies from 'js-cookie'

const Header = () => {
  const [show, setShow] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  useEffect(() => {
    const token = Cookies.get('token');
    setShow(!token);
  }, []);
  return (
    <Box bg={'#151B27'} w={'100%'} h={'12vh'}>
      <Box display={'flex'} alignItems={'center'} minHeight={'12vh'} justifyContent={'space-between'} w={'90%'} m={'auto'}>
        <Box>
          <Link to={'/'}><img src={white} width={"150px"} className='logo' alt="img" /></Link>
        </Box>
     {show ?     <Box display={'flex'} alignItems={'center'}  gap={'3rem'} className='rparent'>
       <Link to={'/register'}><Heading className='register' color={'#00DA84'} fontSize={{lg:'24px', base: '20px'}} fontWeight={'600'}>Регистрация</Heading></Link>
       <Link to={'/login'}>
       <Button className='btn' w={{lg:'190px',base: '100px'}} h={{lg:'57px',base: '45px'}} bg={'#00DA84'} borderRadius={'7px'} style={{fontWeight: '700'}} fontSize={{lg:'22px', base: '17px'}}>Войти</Button>
       </Link>
        </Box> : 
        <Box >
          <Box display={{base: 'none', md: 'flex'}} alignItems={'center'} gap={'1.5rem'} >
       <Link to={'/PersonalPage'}><Heading className='register' color={'#00DA84'} fontSize={{lg:'22px', base: '20px'}} fontWeight={'600'}>Личный кабинет</Heading></Link>
       <Link to={'/Product'}><Heading className='register' color={'#00DA84'} fontSize={{lg:'22px', base: '20px'}} fontWeight={'600'}>Мои Товары</Heading></Link>
       <Link to={'/AddProduct'}><Heading className='register' color={'#00DA84'} fontSize={{lg:'22px', base: '20px'}} fontWeight={'600'}>Добавить трек-код</Heading></Link>
       <Link to={'/contact'}><Heading className='register' color={'#00DA84'} fontSize={{lg:'22px', base: '20px'}} fontWeight={'600'}>Контакты</Heading></Link>
          </Box>
          <Box display={{base: 'flex', md: 'none'}} alignItems={'center'} gap={'1rem'} >
       {/* Hamburger  */}
       <Button ref={btnRef} onClick={onOpen} bg='transparent' _hover={'none'}>
       <FaBarsStaggered color='white' size={20}/>
      </Button>
       <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className='Drawer'>
          <DrawerCloseButton color='red' top='20px' size={30} width='40px' right={'0'} display={{sm:'none', base:'flex'}} _hover='none'/>
          <DrawerHeader color='white'>RITM CARGO</DrawerHeader>

          <DrawerBody >
          <Box display={'flex'} justifyContent='center' pt='40px' gap={'1.5rem'} flexDirection='column'>
       <Link to={'/PersonalPage'}><Heading color={'#00DA84'} fontSize='24px' fontWeight={'600'}>Личный кабинет</Heading></Link>
       <Link to={'/Product'}><Heading color={'#00DA84'} fontSize='24px' fontWeight={'600'}>Мои Товары</Heading></Link>
       <Link to={'/AddProduct'}><Heading color={'#00DA84'} fontSize='24px' fontWeight={'600'}>Добавить трек-код</Heading></Link>
       <Link to={'/contact'}><Heading color={'#00DA84'} fontSize='24px' fontWeight={'600'}>Контакты</Heading></Link>

          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          </Box>
          </Box>}
      </Box>
    </Box>
  )
}

export default Header
