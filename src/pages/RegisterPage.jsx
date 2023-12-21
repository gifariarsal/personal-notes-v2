import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import RegisterInput from "../components/RegisterInput";

function RegisterPage() {
  const navigate = useNavigate();

  async function handleRegister(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun baru</h2>
      <RegisterInput register={handleRegister} />
      <p>
        Sudah punya akun? <Link to="/">Login</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
