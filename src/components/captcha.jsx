import React, { useState, useEffect, useRef } from "react";
import '../components/captcha.css'
import { Box } from "@chakra-ui/react";

const Captcha = () => {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
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
      alert("Valid Captcha");
    } else {
      alert("Invalid Captcha. Try Again");
      setInput("");
      generateCaptcha();
    }
  };

  return (
    <Box display={'flex'} className="" >
      <form onSubmit={handleSubmit} style={{width: '100%'}} >
      <Box className="captchaParent" gap={'20px'}>
      <div id="captcha-container">
        <canvas ref={canvasRef} id="captcha" width="100" height="50"></canvas>
      </div>
        <input
          type="text"
          className="input"
          id="captchaTextBox"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="" type="submit">Validate Captcha</button>
      </Box>
      </form>
    </Box>
  );
};

export default Captcha;
