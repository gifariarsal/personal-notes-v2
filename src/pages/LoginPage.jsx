import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="login-page">
            <h2>
              {locale === "id"
                ? "Masuk untuk mengelola catatan"
                : "Login to manage notes"}
            </h2>
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
              <button type="submit">
                {locale === "id" ? "Masuk" : "Login"}
              </button>
            </form>
            <p>
              {locale === "id" ? "Belum punya akun?" : "Don't have an account?"}{" "}
              <Link to="/register">
                {locale === "id" ? "Daftar" : "Register"}
              </Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
