import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/header";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Alert() {
    const navigator = useNavigate()
const GetToken = Cookies.get("token")
    const Delete = () => {
        if(GetToken){
            Cookies.remove("token")
            Cookies.remove("userId")
            navigator('/')
        
    }
    }

    return (
        <Box>
            <Header />

          {/* User  */}
          <Box bg='#D1ECF1' padding='12px 20px' display='flex' alignItems='center' margin='0px 0px 16px'>
                <Text fontSize='15px' color='#0C5460'>Привет, <span className='UserName'>{Cookies.get('number')}</span>!</Text>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="63vh"
                textAlign='center'
                gap='25px'
            >
                <Text fontSize='24px' fontWeight='600'>Вы действительно хотите покинуть сайт?</Text>
                <Box>
                    <Button onClick={Delete}>Logout</Button>
                    <Button onClick={() => navigator('/PersonalPage')}>Cancel</Button>
                </Box>
            </Box>


               {/* Footer  */}
               <Box bg='#343A40' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  mt='30px' height='13vh'>
                <Text color='white' fontSize='14px'>Наши социальные сети</Text>
                <Box display='flex' alignItems='center' gap='20px' mt='20px'>
                  

                    <Box color='white' fontSize='14px' display='flex' alignItems='center' gap='4px'>
                        <FaWhatsapp />
                        <Text>WhatsApp</Text>
                    </Box>
                </Box>
                <Text color='white' fontSize='14px'>© 2024 Все права защищены.</Text>
            </Box>
        </Box>
    );
}
