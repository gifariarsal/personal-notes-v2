import React from "react";

const RegisterInput = ({
  register,
  name,
  email,
  password,
  onChangeName,
  onChangeEmail,
  onChangePassword,
}) => {
  return (
  <form className="input-register" onSubmit={register}>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" value={name} onChange={onChangeName} />
    <label htmlFor="email">Email</label>
    <input id="email" type="email" value={email} onChange={onChangeEmail} />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      value={password}
      onChange={onChangePassword}
    />
    <button type="submit">Register</button>
  </form>
  );
};

export default RegisterInput;
