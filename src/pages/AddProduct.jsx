import { Box, Button, Input, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Header from '../components/header'
import axios from 'axios'
import { api } from '../api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


export default function AddProduct() {
    const [value, setValue] = useState({trecCode:'', name:''})
    const [loading, setLoading] = useState(false)


    const handlePost = () => {
        setLoading(true)
        axios.post(
            `${api}api/product/create`,
            {
                trecCode: value.trecCode,
                productName: value.name,
            },
            {
                headers: {
                    'token': `${Cookies.get('token')}`
                }
            }
        )
        .then((res) => {
            setLoading(false)
            toast.success(`Трек-код успешно добавлен в Мои товары с локацией "нет данных".`, {
                position: 'top-right',
            });
            

            // Optionally, you can reset the form fields after successful submission
            setValue({ trecCode: '', name: '' });
        })
        .catch((error) => {
            setLoading(false)
            toast.error(`Произошла ошибка при добавлении трек-кода.`, {
                position: 'top-right',
            });
        });
    };
    return (
        <Box>
            <Header />
            <ToastContainer />

        {/* User  */}
            <Box bg='#D1ECF1' padding='12px 20px' display='flex' alignItems='center' margin='0px 0px 16px'>
                <Text fontSize='15px' color='#0C5460'>Привет, <span className='UserName'>{Cookies.get('number')}</span>!</Text>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='center'>
                <Box display='flex' alignItems='' flexDirection='column' justifyContent='center' h='65.2vh' gap='7px'>
                    <Box>
                        <Text fontSize='32px' textAlign='start' color='#212519' margin='0px 0px 8px' mt='25px'>Добавление трек-кода</Text>
                    </Box>

                    <Box w={{ md: '750px', base: "100%" }}>
                        <Box>
                            <label>Трек-код:</label>
                            <Input value={value.trecCode} onChange={(e) => setValue({...value, trecCode: e.target.value})} border='1px solid black' />
                        </Box>
                        <Box pt='15px'>
                            <label>Наименование товара:</label>
                            <Input value={value.name} onChange={(e) => setValue({...value, name: e.target.value})} border='1px solid black' />
                        </Box>
                    </Box>
                    <Box display='flex' alignItems='flex-start' w={'100%'} justifyContent='flex-start' mt='20px' >
                        <Button isDisabled={loading} bg='#007BFF' _hover={{ bg: '#005FC4' }} m={0} color='white' fontWeight='400' onClick={handlePost}>Добавить   {loading ? <Spinner /> : '' }</Button>
                    </Box>
                </Box>
            </Box>

            {/* Footer  */}
            <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center' mt='30px' height='13vh'>
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
                <Text color='white' fontSize='14px'>© 2024 Все права защищены.</Text>
            </Box>
        </Box>
    )
}
