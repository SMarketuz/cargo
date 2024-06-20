import React from 'react'
import Header from '../components/header'
import { Box, Heading, Text } from '@chakra-ui/react'
import { FaUserPen } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { main } from '../assets';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Box className=''>
        <Header />

        <Box className='main' bg={'#151B27'} h={{lg:'88vh', base: '100%', xl: '100%'}} pt={'20px'} pb={{base: '20px', xl: '122px', '2xl': '90px'}}>
          <Box className='pl'
          pl={105} >

            <Box  display={'flex'} justifyContent={{lg:'space-between', base: 'center'}} flexDirection={{base:'column-reverse', lg: 'row'}} alignItems={'center'} gap={{lg:'80px',base: '10px'}} w={'100%'}>
              <Box display={'flex'} flexDirection={'column'} gap={'10px'}  className='left' w={'40%'} >
                <Heading className='heading' color={'#fff'} fontSize={'70px'}>RITM Cargo</Heading>
                <Text pt={'40px'} color={'#707481'}  fontSize={'22px'} className='text' fontWeight={'700'}>Ваша посылка в надежных руках: Отслеживайте, Узнавайте, Следите за своими доставками с нашим сервисом отслеживания посылок.</Text>

                <Box pt={'80px'} className='boxes'>
                  <Box w={''} h={'60px'} className='bg border' borderRadius={'6px'} display={'flex'} alignItems={'center'} pl={'30px'} gap={'20px'} style={{borderBottom: '1px solid #104A3E'}} border-bottom={'#104A3E'}>
                    <FaUserPen color='#63717F' size={'25px'} />
                    <a href=' https://wa.me/77074691537'><Text className='boxtxt' fontSize={'20px'} fontWeight={'600'} color={'#fff'}>Свяжитесь с менеджером</Text></a>
                  </Box>
                  <Box w={''} h={'60px'} className='bg' borderRadius={'6px'} display={'flex'} alignItems={'center'} pl={'30px'} gap={'20px'}>
                    <FaMapLocationDot color='#04D88C' size={'25px'} />
                    <Link to={'/Login'}><Text className='boxtxt' fontSize={'20px'} fontWeight={'600'} color={'#fff'}>Отследите статус заказа</Text></Link>
                  </Box>
                </Box>

                <Text pt={'80px'} color={'#707481'} w={''} fontSize={'22px'} fontWeight={'700'} className='dostavka'>Доставка товара из Китая в Казахстан до-15 дней</Text>
              </Box>

              <Box  >
                <img src={main} className='img' alt="" />
              </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={'70px'} w={'100%'} className='footer'>
              <Box display={'flex'} gap={'10px'}>
                <img className='img2' width={'100px'} src="https://tgcargo.kz/images/1688.svg" alt="img" />
                <img className='img2' width={'100px'} src="https://tgcargo.kz/images/taobao.svg" alt="Pinduoduo" />
                <img className='img2' width={'100px'} src="https://tgcargo.kz/images/alibaba.svg" alt="Pinduoduo" />
                <img className='img2' width={'100px'} src="https://tgcargo.kz/images/Pinduoduo.svg" alt="Pinduoduo" />
              </Box>

              <Box>
                <Text className='footertext' color={'#707481'} w={'560px'} fontSize={'22px'} fontWeight={'700'}>© RITMCargo.kz, 2024. Все права защищены.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Homepage
