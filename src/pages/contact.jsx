import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Header from '../components/header'
import Cookies from 'js-cookie';


const Contact = () => {
    return (
        <Box className='Contact'>
            <Box h={'12vh'}><Header /></Box>
            {/* User  */}
            <Box bg='#D1ECF1' padding='12px 20px' display='flex' alignItems='center' margin='0px 0px 16px'>
                <Text fontSize='15px' color='#0C5460'>Привет, <span className='UserName'>{Cookies.get('number')}</span>!</Text>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} h='65.5vh'>
                <Box display={'flex'} alignItems={{ md: 'flex-end', base: 'flex-start' }} gap={{ md: '30px', base: '10px' }} flexDirection={{ md: 'row', base: 'column' }}>
                    <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
                        <Box>
                            <Heading fontWeight={'400'} fontSize={'25px'}>Контакты</Heading>
                            <Text pt={'7px'}>Свяжитесь с нами по следующим контактам:</Text>
                        </Box>
                       
                        <Box>
                            <Heading fontWeight={'600'} fontSize={'30px'}>Телефон</Heading>
                            <Text pt={'7px'} color={'#847BFF'}><a href="https://api.whatsapp.com/send/?phone=77757524176&text&type=phone_number&app_absent=0">Написать в Whatsapp </a> <a href="https://api.whatsapp.com/send/?phone=77086550262&text&type=phone_number&app_absent=0"><br /></a></Text>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Heading fontWeight={'600'} fontSize={'30px'}>Социальные сети</Heading>
                            <Text pt={'7px'} color={'#847BFF'}><a href="https://www.instagram.com/2k.cargo">Instagram</a></Text>
                        </Box>
                    </Box>


                </Box>
            </Box>


            {/* Footer  */}
            <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  mt='30px' py={'19px'} height='100%'>
                <Text color='white' fontSize='14px'>Наши социальные сети</Text>
                <Box display='flex' alignItems='center' gap='20px' mt='20px'>
                  
                <Link href='https://www.instagram.com/ritm.cargo?igsh=MWE0eDBldXRna242eQ%3D%3D'>
                        <Box color='white' fontSize='14px' display='flex' alignItems='center' gap='4px'>
                            <FaInstagram />
                            <Text>Instagram</Text>
                        </Box>
                        </Link>
                        
                        <Link href='https://wa.me/77074691537'>
                            <Box color='white' fontSize='14px' display='flex' alignItems='center' gap='4px'>
                                <FaWhatsapp />
                                <Text>WhatsApp</Text>
                            </Box>
                        </Link>
                </Box>
                <Text color='white' fontSize='14px'>© 2024 Все права защищены.</Text>
            </Box>
        </Box>
    )
}

export default Contact
