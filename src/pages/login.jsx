import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Box, Button, Checkbox, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { api } from "../api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../assets";

const Login = () => {
  const [value, setValue] = useState({ password: "", number: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const savedNumber = Cookies.get("number");
    const savedPassword = Cookies.get("password"); // If you have saved the password
    if (savedNumber) {
      setValue(prev => ({ ...prev, number: savedNumber }));
    }
    if (savedPassword) {
      setValue(prev => ({ ...prev, password: savedPassword }));
    }
  }, []);
  const handlePost = () => {
    if(value.password.length > 1 && value.password.length > 1){
      setLoading(true)
    }
    axios
    .post(`${api}api/user/login`, {
      password: `${value.password}`,
      phoneNumber: `${value.number}`,
    })
    .then((res) => {
      if(res.data.status === true) {
        toast.success(`Вы вошли в свою учетную запись.`, {
          position: "top-right",
        });
        console.log(res.data);
        setLoading(false)
            Cookies.set("token", res.data.token);
            Cookies.set("userId", `${res.data.userId}`)
            Cookies.set("user_id", res.data.user_id);
            Cookies.set("number", value.number);
            navigate('/')
          } else {
            setLoading(false)
            toast.error(`Неверный пароль или номер телефона.`, {
              position: "top-right",
            });
          }
        }).catch((err) => {
          
          setLoading(false)
          toast.error(`Неверный пароль или номер телефона.`, {
            position: "top-right",
          });
      })
  };

  return (
    <Box>
      <Box minH={'12vh'}>
      <Header />
      </Box>
      <Box
      pt={'130px'} 
        bg="#151B27"
        h={{base: '88vh', md: '100%'}}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        w="100%"
        pb="189px"
      >
        <Box className="TrainImage"></Box>
        <Box
          style={{ zIndex: "999" }}
          className="cregister"
          w={{ md: "800px", base: "90%" }}
        >
          <Image src={login} borderRadius="22px" w="100%" />
          <input
            className="input1"
            onChange={(e) => setValue({ ...value, number: e.target.value })}
            value={value.number}
            placeholder="Ваш номер"
          />
      <ToastContainer />
          <input
            className="input1"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            value={value.password}
            placeholder="Ваш пароли"
          />
          <Box display={'flex'} alignItems={'center'} gap={'5px'} pt={'10px'}>
              <Checkbox  defaultChecked /> 
              <Text color={'white'}>Remember</Text>
           
          </Box>
          <Button className='buttonReg' isDisabled={loading} onClick={handlePost}>Войти  {loading ? <Spinner /> : '' }</Button>

          <Link to={'/register'} style={{color:'#007BFF', fontSize:'16px'}}>Зарегистрироватъся?</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
