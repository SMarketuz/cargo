import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Header from '../components/header'
import Cookies from 'js-cookie';


const Contact = () => {
    return (
        <Box className='Contact'>
            <Header />
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
                            <Heading fontWeight={'600'} fontSize={'30px'}>Адрес</Heading>
                            <Text pt={'7px'}><b>Наш офис</b></Text>
                            <Text>Ерубаева 50а, 109 кабинет</Text>
                        </Box>
                        <Box>
                            <Heading fontWeight={'600'} fontSize={'30px'}>Телефон</Heading>
                            <Text pt={'7px'} color={'#847BFF'}><a href="">Написать в Whatsapp (Караганда) </a> <a href="">Написать в Whatsapp <br /> (Абай / Топар)</a></Text>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <Heading fontWeight={'600'} fontSize={'30px'}>Социальные сети</Heading>
                            <Text pt={'7px'} color={'#847BFF'}><a href="">Instagram</a></Text>
                        </Box>
                    </Box>


                </Box>
            </Box>


            {/* Footer  */}
            <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  mt='30px' height='13vh'>
                <Text color='white' fontSize='14px'>Наши социальные сети</Text>
                <Box display='flex' alignItems='center' gap='20px' mt='20px'>
                    <Box color='white' fontSize='14px' display='flex' alignItems='center' gap='4px'>
                        <FaInstagram />
                        <Text>Instagram</Text>
                    </Box>

                    <Box color='white' fontSize='14px' display='flex' alignItems='center' gap='4px'>
                        <FaWhatsapp />
                        <Text>WhatsApp</Text>
                    </Box>
                </Box>
                <Text color='white' fontSize='14px'>© 2023 Все права защищены.</Text>
            </Box>
        </Box>
    )
}

export default Contact
