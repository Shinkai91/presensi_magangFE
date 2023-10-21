import React, { useState, useEffect, useCallback } from 'react';
import password_icon from "../Assets/password.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../LoginSignup/PasswordInput.css';

function PasswordInput({ password, setPassword }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const setPasswordCallback = useCallback(
    (value) => setPassword(value),
    [setPassword]
  );

  // Use useEffect to retrieve the password from cookies
  useEffect(() => {
    const cookiePassword = getCookie("password");
    if (cookiePassword) {
      setPasswordCallback(cookiePassword);
    }
  }, [setPasswordCallback]);

  const getCookie = (name) => {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };

  return (
    <div className='input'>
      <img src={password_icon} alt="" />
      <input
        id='password'
        type={passwordVisible ? 'text' : 'password'}
        placeholder='Password'
        value={password}
        onChange={(e) => setPasswordCallback(e.target.value)}
      />
      <span className="password-toggle" onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
      </span>
    </div>
  );
}

export default PasswordInput;