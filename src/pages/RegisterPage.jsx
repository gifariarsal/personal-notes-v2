import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import useInput from "../hooks/useInput";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, handleChangeName] = useInput("");
  const [email, handleChangeEmail] = useInput("");
  const [password, handleChangePassword] = useInput("");
  const [confirmPassword, handleChangeConfirmPassword] = useInput("");

  async function handleRegister(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password harus sama");
      return;
    }

    const user = { name, email, password };
    const { error } = await register(user);

    if (!error) {
      navigate("/");
      alert("Akun berhasil didaftarkan");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="register-page">
            <h2>
              {locale === "id"
                ? "Isi form untuk mendaftar"
                : "Fill in the form to register"}
            </h2>
            <form className="input-register" onSubmit={handleRegister}>
              <label htmlFor="name">{locale === "id" ? "Nama" : "Name"}</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleChangeName}
              />
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
              <label htmlFor="confirm-password">
                {locale === "id" ? "Konfirmasi Password" : "Confirm Password"}
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
              <button type="submit">
                {locale === "id" ? "Daftar" : "Register"}
              </button>
            </form>
            <p>
              {locale === "id"
                ? "Sudah punya akun?"
                : "Already have an account?"}{" "}
              <Link to="/">{locale === "id" ? "Masuk" : "Login"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
