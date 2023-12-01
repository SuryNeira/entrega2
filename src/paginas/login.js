
import React, { useState } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';

const LoginComponent = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [captchaValue, setCaptchaValue] = useState('');


 const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes validar si el captcha fue resuelto correctamente antes de continuar con el proceso de inicio de sesión
 };

 const onChangeUsername = (event) => {
    setUsername(event.target.value);
 };

 const onChangePassword = (event) => {
    setPassword(event.target.value);
 };

 const onChangeCaptcha = (value) => {
    setCaptchaValue(value);
 };

 const onExpired = () => {
    setCaptchaValue('');
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input type="text" value={username} onChange={onChangeUsername} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={password} onChange={onChangePassword} />
      </label>
      <br />
      <ReCAPTCHA sitekey="TU_CLAVE_SITE" onChange={onChangeCaptcha} onExpired={onExpired} />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
 );
};

export default LoginComponent;
