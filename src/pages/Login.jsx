import React from "react";
import "./Login.css"

const Login = () => (
    <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
        </form>
    </div>
);


export default Login;