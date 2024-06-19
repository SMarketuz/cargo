import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/header';
import { Box, Button, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';
import { FaDoorOpen } from "react-icons/fa";
import '../components/captcha.css'
import axios from 'axios';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { register } from '../assets';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [value, setValue] = useState({ password: '', name: '', number: '' })
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
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
    if(value.password.length > 1 && value.password.length > 1 && value.name.length > 1 && value.number.length > 1){
      setLoading(true)
      try {
        axios.post(`${api}api/user/create`, {
          "password": `${value.password}`,
          "name": `${value.name}`,
          "phoneNumber": `${value.number}`,
          "gender": `${gender}`,
        })
          .then((res) => {
            toast.success(`Вы вошли в свою учетную запись.`, {
              position: "top-right",
            });
            setLoading(false)
            Cookies.set("userId", `${res.data.userId}`)
            Cookies.set("number", `${value.number}`)
            Cookies.set("password", `${value.password}`)
            navigation('/Login')
          })
        } catch (error) {
        setLoading(false)
        console.log(error.message);
      }
    } else{
      toast.warn(`Пожалуйста, заполните все поля правильно.`, {
        position: "top-right",
      });
    }
  }
  const [gender, setGender] = useState('Male');

  // Handle change event
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Box>
      <Header />
      <ToastContainer />

      <Box bg='#151B27' h='88vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column' w='100%' pb='100px'>
        <Box className='TrainImage'>
        </Box>
        <Box className='cregister' zIndex='999' w={{ md: '800px', base: '90%' }}>
          <Image src={register} borderRadius='22px' w='100%' />
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
          <Select className='input1' placeholder='пол' color='white' h='70px' value={gender} onChange={handleChange}>
            <option className='option' value="male">Male</option>
            <option className='option' value="female">Female</option>
          </Select>
          <Button className='buttonReg' disabled={loading} onClick={handleSubmit}>Зарегистрироватъся  {loading ? <Spinner /> : '' }</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
