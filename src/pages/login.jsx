import React, { useState } from "react";
import Header from "../components/header";
import { Box, Button, Image, Input } from "@chakra-ui/react";
import { api } from "../api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerLog } from "../assets";

const Login = () => {
  const [value, setValue] = useState({ password: "", number: "" });
  const navigate = useNavigate();

  const handlePost = () => {
    axios
      .post(`${api}api/user/login`, {
        password: `${value.password}`,
        phoneNumber: `${value.number}`,
      })
      .then((res) => {
          if(res.data.status == true) {
            toast.success(`Вы вошли в свою учетную запись.`, {
              position: "top-right",
            });
            Cookies.set("token", res.data.token);
            localStorage.setItem("user_id", res.data.user_id);
            Cookies.set("number", value.number);
            navigate('/')
          } else {
            toast.error(`Неверный пароль или номер телефона.`, {
              position: "top-right",
            });
          }
      });
  };

  return (
    <Box>
      <Header />
      <Box
        bg="#151B27"
        h="88vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        w="100%"
        pb="100px"
      >
      <ToastContainer />
        <Box className="TrainImage"></Box>
        <Box
          style={{ zIndex: "999" }}
          className="cregister"
          w={{ md: "800px", base: "90%" }}
        >
          <Image src={registerLog} borderRadius="22px" w="100%" />
          <input
            className="input1"
            onChange={(e) => setValue({ ...value, number: e.target.value })}
            value={value.number}
            placeholder="Ваш номер"
          />
          <input
            className="input1"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            value={value.password}
            placeholder="Ваш пароли"
          />
          <div className="checkbox-wrapper-4">
            <input className="inp-cbx" id="morning" type="checkbox" />
            <label className="cbx" htmlFor="morning">
              <span>
                <svg width="12px" height="10px"></svg>
              </span>
              <span>Remember</span>
            </label>
            <svg className="inline-svg">
              <symbol id="check-4" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
          <Button className="buttonReg" onClick={handlePost} mb='12px'>
            Зарегистрироватъся
          </Button>
          <Link to={'/register'} style={{color:'#007BFF', fontSize:'16px'}}>Forgot Password?</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
