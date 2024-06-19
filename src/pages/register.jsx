import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/header';
import { Box, Button, Image, Input, Select, Text } from '@chakra-ui/react';
import { FaDoorOpen } from "react-icons/fa";
import '../components/captcha.css'
import axios from 'axios';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { RegisterImg } from '../assets';


const Register = () => {
  const [value, setValue] = useState({ password: '', name: '', number: '' })
  const [captcha, setCaptcha] = useState("");
  const navigation = useNavigate()
  const [input, setInput] = useState("");
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const canvasRef = useRef(null);
  const generateCaptcha = () => {
    const charsArray =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    const lengthOtp = 6;
    let captchaArray = [];

    while (captchaArray.length < lengthOtp) {
      const index = Math.floor(Math.random() * charsArray.length);
      if (captchaArray.indexOf(charsArray[index]) === -1) {
        captchaArray.push(charsArray[index]);
      }
    }
    const captchaString = captchaArray.join("");
    setCaptcha(captchaString);
    drawCaptcha(captchaString);
  };

  const drawCaptcha = (captchaString) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px Georgia";
    ctx.strokeText(captchaString, 0, 30);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === captcha) {
      handlePost()
    } else {
      alert("Invalid Captcha. Try Again");
      setInput("");
      generateCaptcha();
    }
  };

  const handlePost = () => {
    try {
      axios.post(`${api}api/user/create`, {
        "password": `${value.password}`,
        "name": `${value.name}`,
        "phoneNumber": `${value.number}`,
        "gender": `${gender}`,
      })
        .then((res) => {
          console.log(res.data);
          Cookies.set("userId", `${res.data.userId}`)
          navigation('/Login')
        })
    } catch (error) {
      console.log(error.message);
    }
  }
  const [gender, setGender] = useState('No sex');

  // Handle change event
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  console.log(gender);
  return (
    <Box>
      <Header />
      <Box bg='#151B27' h='88vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column' w='100%' pb='100px'>
        <Box className='TrainImage'>
        </Box>
        <Box className='cregister' zIndex='999' w={{ md: '800px', base: '90%' }}>
          <Image src={RegisterImg} borderRadius='22px' w='100%' />
          <input className='input1' type='text' placeholder='Ваш пароли' onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} />
          <input className='input1' type='text' placeholder='Ваш имя' onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} />
          <input className='input1' type='text' placeholder='Ваш номер' onChange={(e) => setValue({ ...value, number: e.target.value })} value={value.number} />
          <Box pt={'10px'}>
            <Box>
              <Box display={'flex'} className="" >
                <form onSubmit={handleSubmit} style={{ width: '100%' }} >
                  <Box className="captchaParent" gap={'20px'}>
                    <div id="captcha-container">
                      <canvas ref={canvasRef} id="captcha" width="100" height="50"></canvas>
                    </div>
                    <input
                      type="text"
                      className="input"
                      id="captchaTextBox" placeholder='Captcha'
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    {/* <button className="cbtn" type="submit">Captcha</button> */}
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
          <Select className='input1' color='white' h='70px' value={gender} onChange={handleChange}>
            <option value="Gender">No sex</option>
            <option className='option' value="male">Male</option>
            <option className='option' value="female">Female</option>
          </Select>
          <Button className='buttonReg' onClick={handleSubmit}>Зарегистрироватъся</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
