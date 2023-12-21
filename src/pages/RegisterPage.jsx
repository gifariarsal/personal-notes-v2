import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import useInput from "../hooks/useInput";

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
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun baru</h2>
      <form className="input-register" onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleChangeName} />
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
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
