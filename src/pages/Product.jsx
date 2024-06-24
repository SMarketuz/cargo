import { Box, Link, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CgClose } from "react-icons/cg";
import { FaCity } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Header from '../components/header';
import axios from 'axios';
import { api } from '../api';
import Cookies from 'js-cookie';

export default function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [number, setNumber] = useState('');

    useEffect(() => {

        axios.get(`${api}api/product/get`, {
            headers: {
                'token': `${Cookies.get('token')}`
            }
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
                setNumber(res.data.data[0]?.userId.phoneNumber || '');
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDelete = (id) => {
        setLoading(true)
        axios.delete(`${api}api/product/delete/${id}`, {
            headers: {
                "token": Cookies.get('token')
            }
        })
            .then((res) => {
                window.location.reload()
                setLoading(false)
            })
        console.log(Cookies.get('token'));

    };

    return (
        <Box>
            <Box h={'12vh'}>
                <Header />

            </Box>
            {/* User  */}
            <Box bg='#D1ECF1' padding='12px 20px' display='flex' alignItems='center' margin='0px 0px 16px'>
                <Text fontSize='15px' color='#0C5460'>Привет, <span className='UserName'>{Cookies.get('number')}</span>!</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' maxH={'100%'} minH={'65.2vh'} >
                {loading ? <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'65.2vh'}><Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /></Box> :
                    <Box display='flex' flexDirection='column'>
                        <Box display='flex' alignItems='flex-start' justifyContent='flex-start' flexDirection='column'>
                            <Text fontSize='32px' textAlign='start' color='#212519' margin='0px 0px 8px' mt='25px'>Мои товары</Text>
                            <Link href='/AddProduct' className='TextName' fontSize='14px'>Добавить трек код</Link>
                        </Box>

                        {/* for Product Card  */}
                        <Box display='flex' alignItems='center' flexDirection='column' gap={'30px'}>
                            {data.length && data.map((item, i) => (
                                <Box key={i} display={Cookies.get('user_id') === item.userId._id ? 'block' : 'none'} >
                                    <Box border='1px solid #DFDFDF' padding='20px' borderRadius='8px' display='flex' flexDirection='column' gap='20px' width={{ md: '800px', base: '100%' }} h='100%'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                                            <Box>
                                                <Text fontSize='20px' color='#212529'>Трек-код: {item.trecCode}</Text>
                                                <Text fontSize='16px' color='#6C757D'>Наименование: {item.productName}</Text>
                                            </Box>
                                            <Box bg='#DC3545' color='white' borderRadius='4px' height='45px' padding='8px' cursor='pointer' display='flex' alignItems='center' onClick={() => handleDelete(item._id)}>
                                                <CgClose size={20} />
                                            </Box>
                                        </Box>
                                        <strong>Статусы отслеживания:</strong>
                                        <Text>Локация: Пока нет данных (2024-06-16 14:37:45)</Text>
                                        <hr />
                                        <Text display='flex' gap='15px'>
                                            <FaCity size={24} />
                                            <Text color='black' fontSize='14px'><strong> Принят на складе Китая</strong></Text>
                                        </Text>
                                        <hr />
                                        <Text display='flex' gap='15px'>
                                            <FaCity size={24} />
                                            <Text color='black' fontSize='14px'><strong>Отправлен со склада Китая</strong></Text>
                                        </Text>
                                        <hr />
                                        <Text display='flex' gap='15px'>
                                            <FaCity size={24} />
                                            <Text color='black' fontSize='14px'><strong>В пути</strong></Text>
                                        </Text>
                                        <hr />
                                        <Text display='flex' gap='15px'>
                                            <FaCity size={24} />
                                            <Text color='black' fontSize='14px'><strong>Прибыл в Алмату</strong></Text>
                                        </Text>
                                        <hr />
                                        <Text display='flex' gap='15px'>
                                            <FaCity size={24} />
                                            <Text color='black' fontSize='14px'><strong>Прибыл в город Караганда</strong></Text>
                                        </Text>
                                        <hr />
                                        <Text color='#6C757d' fontSize='14px'>Цена будет определена в городе Караганда</Text>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>}
            </Box>
            {/* Footer  */}
            <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='30px' py={'20px'} height='100%'>
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
                <Text color='white' fontSize='14px'>© 2024  Все права защищены.</Text>
            </Box>
        </Box>
    );
}
