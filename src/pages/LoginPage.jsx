import React from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { login } from "../utils/api";

const LoginPage = ({ loginSuccess }) => {
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");

  async function handleLogin(event) {
    event.preventDefault();
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <section className="login-page">
      <h2>Login untuk mengelola catatan</h2>
      <form className="input-login" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/">Register</Link>
      </p>
    </section>
  );
};

export default LoginPage;
