import { Button } from '@chakra-ui/button'
import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { fon } from '../assets'
import PersonCard from '../components/PersonCard'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Header from '../components/header'
import { useNavigate } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import Cookies from 'js-cookie';


export default function PersonalPage() {
    const navigate = useNavigate('')
    const Delete = () => {
      navigate('/Alert')
    }
     const handleCopy = () => {
        alert('Копировано текст: 15045507371')
        copy("15045507371");
        
      };
     const handleCopy2 = () => {
        alert('Копировано текст: 150广东省 佛山市 南海区45507371')
        copy("广东省 佛山市 南海区");
        
      };
     const handleCopy3 = () => {
        alert('Копировано текст: 崔T826-1307karaganda')
        copy("崔T826-1307karaganda");
        
      };
     const handleCopy4 = () => {
        alert('Копировано текст: 广东省佛山市南海区里水镇草场海南洲工业园76号杨刚仓库转 崔T826-1307karaganda')
        copy("广东省佛山市南海区里水镇草场海南洲工业园76号杨刚仓库转 崔T826-1307karaganda");
        
      };

    return (
        <Box>
            <Header />

             {/* User  */}
             <Box bg='#D1ECF1' padding='12px 20px' display='flex' alignItems='center' margin='0px 0px 16px'>
                <Text fontSize='15px' color='#0C5460'>Привет, <span className='UserName'>{Cookies.get('number')}</span>!</Text>
            </Box>

            <Box px={{ md: '0', base: '12px' }} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                {/* Заполнение адреса  */}
                <Box display='flex' flexDirection='column' >
                    <Text fontSize='24px' textAlign='start' color='#212519' margin='0px 0px 8px' mt='25px'>Заполнение адреса на китайском маркетплейсе:</Text>
                    <ol style={{ fontSize: '14px' }}>
                        <li ><strong>1. <span className='TextName'> 崔T826-{Cookies.get('userId')}karaganda</span></strong>- ваш личный код, полученный в нашем карго. (по этому номеру вы будете получать  заказы)  <span onClick={handleCopy3} style={{ cursor: 'pointer' }}>📋</span></li>
                        <li >2.Указываем адрес склада:<strong className='TextName'>15045507371</strong> <span onClick={handleCopy}  style={{ cursor: 'pointer' }}>📋</span> </li>
                        <li >3.Копируем и вставляем иероглифы<span className='TextName'>广东省 佛山市 南海区</span> <span onClick={handleCopy2} style={{ cursor: 'pointer' }} >📋</span></li>
                        <li >4.Указываем подробный адрес склада: <span className="TextName"> 广东省佛山市南海区里水镇草场海南洲工业园76号杨刚仓库转 崔T826-1307karaganda </span> <span onClick={handleCopy4} style={{ cursor: 'pointer' }} >📋</span></li>
                    </ol>
                </Box>

                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Image width={{ md: '765px', base: '100%' }} height={{ md: '780px', base: 'auto' }} mt='30px' src={fon} />
                </Box>

                {/* Personal Cards  */}
                <Box display='flex' flexDirection='column'>
                    <Text fontSize='24px' color='#212519' margin='0px 0px 8px' mt='80px' textAlign='center'>Связь с нами</Text>
                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection={{ xl: 'row', md: 'row', base: 'column' }} gap={{ xl: '30px', md: '20px', base: '10px' }}>
                        {/* 1 */}
                        <Box display='flex' alignItems='center' flexDirection='column' gap='8px'>
                            <PersonCard bg='#007BFF' icon={'📱'} hoverBg='#006ADC' text='Караганда' />
                            <PersonCard bg='#007BFF' icon={'📱'} hoverBg='#006ADC' text='Абай /Топар' />
                            <PersonCard bg='#007BFF' icon={'📱'} hoverBg='#006ADC' text='Шахтинск / Шахан' />
                            <PersonCard bg='#007BFF' icon={'📱'} hoverBg='#006ADC' text='Темиртау' />
                            <PersonCard bg='#007BFF' icon={'📱'} hoverBg='#006ADC' text='Сарань' />
                        </Box>


                        {/* 2 */}
                        <Box display='flex' alignItems='center' flexDirection='column' gap='8px'>
                            <PersonCard bg='#28A745' icon={'💬'} hoverBg='#1D7A33' text='Караганда' />
                            <PersonCard bg='#28A745' icon={'💬'} hoverBg='#1D7A33' text='Абай /Топар' />
                            <PersonCard bg='#28A745' icon={'💬'} hoverBg='#1D7A33' text='Шахтинск / Шахан' />
                            <PersonCard bg='#28A745' icon={'💬'} hoverBg='#1D7A33' text='Темиртау' />
                            <PersonCard bg='#28A745' icon={'💬'} hoverBg='#1D7A33' text='Сарань' />
                        </Box>
                    </Box>

                    <Box display='flex' alignItems='start' justifyContent='start' mt='20px' px={{ md: '0', base: '12px' }}>
                        <Button bg='#FFC107' _hover={{ bg: '#BB8E05' }} fontWeight='400' onClick={Delete}>Выход с аккаунта</Button>
                    </Box>
                </Box>

                {/* Footer  */}
                <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center' w={{ md: '770px', base: '100%' }} mb='30px' mt='30px' height='13vh'>
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
                    <Text color='white' fontSize='14px' mb='20px'>© 2023 Все права защищены.</Text>
                </Box>
            </Box>
        </Box>
    )
}
