import React from 'react';
import './Register.css';

const Register = () => (
  <div className="register-container">
    <h1>Registrate</h1>
    <form className="register-form">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="surname">Apellido:</label>
      <input type="text" id="surname" name="surname" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />
      <label htmlFor="repassword">Repita su Contraseña:</label>
      <input type="password" id="repassword" name="repassword" required />
      <button type="submit">Registrate</button>
    </form>
  </div>
);

export default Register;
